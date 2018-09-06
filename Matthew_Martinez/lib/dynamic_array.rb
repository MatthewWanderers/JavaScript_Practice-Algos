require_relative "static_array"
# require 'byebug'

class DynamicArray
  attr_reader :length

  def initialize(length = 0)
    @length = length
    @capacity = 8
    @store = StaticArray.new(@capacity)
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[index]
  end

  # O(1)
  def []=(index, value)
    check_index(index)
    @store[index] = value
  end

  # O(1)
  def pop
    check_index(0)
    @length -= 1
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    resize!
    @store[@length] = val
    @length += 1
  end

  # O(n): has to shift over all the elements.
  def shift
    check_index(0)
    shifted = @store[0]
    i = 0
    while i < @length - 1
      @store[i] = @store[i + 1]
      i += 1
    end
    @length -= 1
    shifted
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    i = @length
    while i > 0
      @store[i] = @store[i - 1]
      i -= 1
    end
    @store[0] = val
    @length += 1
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    raise "index out of bounds" if index >= @length || @length.zero?

  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    if @capacity == @length
      @capacity.zero? ? @capacity += 1 : @capacity *= 2
      new_store = StaticArray.new(@capacity)

      i = 0
      while i < @length
        new_store[i] = @store[i]
        i += 1
      end
      @store = new_store
    end
  end
end
