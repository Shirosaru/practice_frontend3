from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from translate import translate_sequence
import os

# Create the Flask application object
app = Flask(__name__)

# If you want to enable CORS (optional), add this line:
CORS(app)  # Allow all cross-origin requests

# Define the route to handle POST requests
@app.route('/execute', methods=['POST'])
def execute():
    try:
        # Get the incoming JSON data from the request
        data = request.get_json()
        print(f"Received data: {data}")  # Print the received data for debugging
        input_string = data.get("input", "")

        # Check if input string is empty
        if not input_string:
            raise ValueError("No input string provided")

        print(f"Input string: {input_string}")  # Print the input string

        # Check if the input string is a nucleotide sequence (lowercase check)
        if input_string.islower():
            # Call the translation function from translate.py and get the file name
            output_filename = translate_sequence(input_string)

            # Return the Excel file as a downloadable response
            return send_file(output_filename,
                            as_attachment=True,  # Make it downloadable
                            download_name="translated_sequence.xlsx",  # Set the download file name
                            mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        
        else:
            # If it's not a nucleotide sequence, simply convert to uppercase
            output_string = input_string.upper()
            return jsonify({"result": str(output_string)})

    except Exception as e:
        # If an error occurs, return a 400 error with the message
        print(f"Error: {e}")  # Print the error for debugging
        return jsonify({"error": str(e)}), 400


# Run the application
if __name__ == "__main__":
    # Start Flask server on port 5000
    app.run(debug=True, host='0.0.0.0', port=5000)
