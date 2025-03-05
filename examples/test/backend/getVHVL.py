import anarci

def concatenate_sequence_from_anarci_output(anarci_output, protein_sequence):
    """
    Concatenates amino acids from the ANARCI output sequence and extracts the sequence after the concatenated part.
    
    Args:
    - anarci_output (list): ANARCI output containing amino acid positions and sequences.
    - protein_sequence (str): The original sequence to extract the remaining sequence from.
    
    Returns:
    - concatenated_sequence (str): A string of the concatenated amino acids (ignoring gaps).
    - remaining_sequence (str): The sequence that starts after the concatenated sequence.
    """
    # Initialize an empty string to store the concatenated result
    concatenated_result = ""

    # Loop over the range of n (based on the length of the list)
    for n in range(len(anarci_output[0][0][0])):  # Dynamically handle the length
        value = anarci_output[0][0][0][n][1]
        concatenated_result += value.replace("-", "")  # Remove any hyphens

    # Get the position where the concatenated sequence ends
    concatenated_length = len(concatenated_result)

    # Extract the remaining sequence from protein_sequence, starting after the concatenated result
    remaining_sequence = protein_sequence[concatenated_length:]  # Slice the sequence after concatenation

    return concatenated_result, remaining_sequence



#This was a test case backup
# Example antibody sequence (this should be a valid antibody variable region sequence)
#protein_sequence = "QVQLKQSGPGLVQPSQSLSITCTVSGFSLTNYGVHWVRQSPGKGLEWLGVIWSGGNTDYNTPFTSRLSINKDNSKSQVFFKMNSLQSNDTAIYYCARALTYYDYEFAYWGQGTLVTVSAASTKGPSVFPLAPSSKSTSGGTAALGCLVKDYFPEPVTVSWNSGALTSGVHTFPAVLQSSGLYSLSSVVTVPSSSLGTQTYICNVNHKPSNTKVDKRVEPKSCDKTHTCCPCPAPELLGGPSVFLFPPKPKDTLMISRTPEVTCVVVDVSHEDPEVKFNWYVDGVEVHNAKTKPREEQYNSTYRVVSVLTVLHQDWLNGKEYKCKVSNKALPAPIEKTISKAKGQPREPQVYTLPPREEMTKNQVSLTCLVKGFYPSDIAVEWESNGQPENNYKTTPPVLDSDGSFFLYSKLTVDKSRWQQGNVFSCSVMHEALHNHYTKSLSLSPGK"

def getVHVL(protein_sequence):

    # Run ANARCI
    anarci_result = anarci.run_anarci(protein_sequence, scheme='imgt')
    anarci_output=anarci_result[1]

    # Now you can call the function with the anarci_output list
    concatenated_sequence, remaining_sequence = concatenate_sequence_from_anarci_output(anarci_output, protein_sequence)

    # Print the concatenated sequence and the remaining sequence
    print("Concatenated Sequence:", concatenated_sequence)
    print("Remaining Sequence:", remaining_sequence)
    
    return concatenated_sequence, remaining_sequence