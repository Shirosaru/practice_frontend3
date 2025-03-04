import pandas as pd
from Bio.Seq import Seq
import os

def translate_sequence(input_string):
    # Convert the string to a Seq object (assuming nucleotide sequence)
    seq = Seq(input_string)
    
    # Translate the sequence (assuming it's a valid nucleotide sequence)
    translated_sequence = seq.translate()
    
    # Prepare data to save to Excel (for example, a DataFrame)
    data = {"Original Sequence": [input_string], "Translated Sequence": [str(translated_sequence)]}
    df = pd.DataFrame(data)
    
    # Save the data to an Excel file
    output_filename = "translated_sequence.xlsx"
    df.to_excel("./metamask-sdk-examples/examples/test/backend/"+ output_filename, index=False, engine="openpyxl")
    
    return output_filename
