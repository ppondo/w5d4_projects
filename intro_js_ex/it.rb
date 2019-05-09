def bubble_sort
    sorted = false

    while !sorted
        sorted = true

        (0...self.length).each do |i|
            if self[i] > self[i + 1] unless i == self.length - 1

                self[i], self[i + 1] = self[i + 1], self[i]
                sorted = false
            end
        end
    end
    self
end