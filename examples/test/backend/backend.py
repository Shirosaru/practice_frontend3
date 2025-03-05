from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import pandas as pd
from Bio.Seq import Seq
import os
import getVHVL

# Folder to store the generated files
UPLOAD_FOLDER = './backend/uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Initialize Flask app
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Enable CORS
CORS(app)

# Helper function for translation and saving the DataFrame as Excel
def translate_sequence(input_string):
    # Convert the string to a Seq object (assuming nucleotide sequence)
    seq = Seq(input_string)
    
    # Translate the sequence (assuming it's a valid nucleotide sequence)
    translated_sequence = seq.translate()
    
    # Prepare data to save to Excel (for example, a DataFrame)
    data = {
        "Original Sequence": [input_string],
        "Translated Sequence": [str(translated_sequence)]
    }
    df = pd.DataFrame(data)
    
    # Generate Excel file path
    output_filename = os.path.join(UPLOAD_FOLDER, "translated_sequence.xlsx")
    df.to_excel(output_filename, index=False, engine="openpyxl")
    
    return output_filename, df.to_dict(orient="records")  # Return the file path and DataFrame content as dict

# Define route for handling POST requests
@app.route('/execute', methods=['POST'])
def execute():
    try:
        data = request.get_json()
        input_string = data.get("input", "")

        # Check if the input string is empty
        if not input_string:
            raise ValueError("No input string provided")

        # Check if the input string is a nucleotide sequence (lowercase)
        if input_string.islower():
            # Translate the sequence and return the file path and data
            output_path, processed_data = translate_sequence(input_string)

            return jsonify({
                "processed_data": processed_data,  # Return the processed data (JSON)
                "file_path": output_path           # Return the file path for download
            })

        else:
            # For non-nucleotide sequences, just process the string
            return jsonify({"result": input_string.upper()})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/get_vhvl', methods=['POST'])
def get_vhvl():
    data = request.get_json()
    protein_sequence = data.get('protein_sequence', '')

    # Get the VHVL sequence and the remaining part
    vhvl, remaining = getVHVL.getVHVL(protein_sequence)

    return jsonify({
        'vhvl': vhvl,
        'remaining': remaining
    })



# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
