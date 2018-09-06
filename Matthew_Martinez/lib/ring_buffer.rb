require_relative "static_array"
require 'byebug'

class RingBuffer
  attr_reader :length

  def initialize(length = 0)
    @length = length
    @capacity = 8
    @start_idx = 0
    @store = StaticArray.new(@capacity)
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[(@start_idx + index) % @capacity]
  end

  # O(1)
  def []=(index, val)
    check_index(index)
    @store[(@start_idx + index) % @capacity] = val
  end

  # O(1)
  def pop
    check_index(0)
    @length -= 1
  end

  # O(1) ammortized
  def push(val)
    resize!
    @store[@length % @capacity] = val
    @length += 1
  end

  # O(1)
  def shift
    check_index(0)
    shifted = @store[@start_idx]
    @start_idx = (@start_idx + 1) % @capacity
    @length -= 1
    shifted
  end

  # O(1) ammortized
  def unshift(val)
    resize!
    @start_idx = (@start_idx - 1) % @capacity
    @store[@start_idx] = val
    @length += 1
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
    raise "index out of bounds" if index >= @length || @length.zero?
  end

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
