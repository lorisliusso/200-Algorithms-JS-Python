def classPhotos(redShirtHeights, blueShirtHeights):
    r, b = [redShirtHeights, blueShirtHeights]
    r.sort()
    b.sort()
    r_counter, b_counter = [0, 0]

    for i in range(len(r)):
        if r[i] == b[i]:
            return False
        if r[i] > b[i]:
            r_counter += 1
        elif b[i] > r[i]:
            b_counter += 1

    return r_counter == len(r) or b_counter == len(r)
