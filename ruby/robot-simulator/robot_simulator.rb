class Robot
  DIRECTIONS = %i[east west north south]
  NORTH = :north
  SOUTH = :south
  EAST = :east
  WEST = :west

  def initialize
    # set a default variable
    @bearing = :north
  end

  # default orient for robot?
  def self.orient(direction)
    # guard clause here to say if its not part of
    # the directions array method should return something
    bearing = direction
  end

  # should be an instance method
  # def self.bearing
  # end
end

robot = Robot.new
robot.orient(Robot.SOUTH)
