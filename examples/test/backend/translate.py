import os
import pandas as pd
from Bio.Seq import Seq

def translate_sequence(input_string):
    # Convert the string to a Seq object (assuming nucleotide sequence)
    seq = Seq(input_string)
    
    # Translate the sequence (assuming it's a valid nucleotide sequence)
    translated_sequence = seq.translate()

    # Dynamically determine the correct path to the 'uploads' folder in the backend
    base_dir = os.path.dirname(os.path.abspath(__file__))  # Get the directory where the current script is located
    uploads_dir = os.path.join(base_dir, 'uploads')  # Join with 'uploads' folder in the backend

    # Ensure the uploads directory exists
    os.makedirs(uploads_dir, exist_ok=True)

    # Set the output file path
    output_filename = "translated_sequence.xlsx"
    output_path = os.path.join(uploads_dir, output_filename)

    # Prepare data to save to Excel (for example, a DataFrame)
    data = {"Original Sequence": [input_string], "Translated Sequence": [str(translated_sequence)]}
    df = pd.DataFrame(data)

    # Save the data to an Excel file in the 'uploads' directory
    df.to_excel(output_path, index=False, engine="openpyxl")

    return output_path
