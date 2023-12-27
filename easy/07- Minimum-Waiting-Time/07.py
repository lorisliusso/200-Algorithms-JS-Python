def minimum_waiting_time(queries):
    if len(queries) == 0:
        return 0

    queries.sort()
    counter, index = [0, 1]

    for i in range(len(queries) - 1):
        counter += sum(queries[0:index])
        index += 1

    return counter
