def sum_pairs(list_integers, desired_sum):
    """
    Given a list of integers and a desired sum, return a list
    of list of pairs of integers that sum up to the desired sum. 
    If no pairs satisfied the desired sum, return 'unable to find pairs'.
    """
    output = []
    for i in range(len(list_integers)):
        for elt in list_integers[i:]: #paired with all elts after each elt, this get all the possible pairs
            if list_integers[i] + elt == desired_sum:
                output.append([list_integers[i],elt])

    return output if output else 'unable to find pair' #empty list has a bool of False