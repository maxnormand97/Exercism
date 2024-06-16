class Robot
  attr_accessor :bearing, :coordinates

  NORTH = { direction: :north, value: 0 }
  EAST = { direction: :east, value: 1 }
  SOUTH = { direction: :south, value: 2 }
  WEST = { direction: :west, value: 3 }

  DIRECTIONS = [NORTH, EAST, SOUTH, WEST]

  def initialize
    @bearing = :north
    @coordinates = [0, 0]
  end

  def at(x_axis, y_axis)
    @coordinates = [x_axis, y_axis]
  end

  def advance
    case @bearing
    when :north
      @coordinates[1] += 1
    when :east
      @coordinates[0] += 1
    when :south
      @coordinates[1] -= 1
    when :west
      @coordinates[0] -= 1
    end
  end

  def orient(direction)
    directions = DIRECTIONS.map { |direction| direction[:direction] }
   raise ArgumentError unless directions.include?(direction)

    @bearing = direction
  end

  def turn_right
    if @bearing == :west
      return @bearing = :north
    end

    move('add')
  end

  def turn_left
    if @bearing == :north
      return @bearing = :west
    end

    move('subtract')
  end

  private

  def move(operation)
    current_direction = DIRECTIONS.find { |direction| direction[:direction] == @bearing }
    if operation == 'add'
      value_lookup = (current_direction[:value] + 1) % 4
    else
      value_lookup = (current_direction[:value] - 1) % 4
    end

    new_direction = DIRECTIONS.find { |direction| direction[:value] == value_lookup }
    @bearing = new_direction[:direction]
  end
end

class Simulator
  attr_accessor :instructions

  TURN_RIGHT = { code: 'R', command: :turn_right }
  ADVANCE = { code: 'A', command: :advance }
  TURN_LEFT = { code: 'L', command: :turn_left }
  COMMANDS = [TURN_LEFT, TURN_RIGHT, ADVANCE]

  def initialize
    @instructions = []
  end

  def instructions(commands)
    commands.split('').each do |command_code|
      selected_command = COMMANDS.find { |command| command[:code] == command_code }
      @instructions << selected_command[:command]
    end
    return @instructions
  end

  def place(robot, x:, y:, direction:)
    robot.coordinates = [x, y]
    robot.bearing = direction
  end

  def evaluate(robot, commands)
    @instructions = []  # Reset the instructions
    instructions(commands).each do |perform_command|
      robot.send(perform_command)
    end
  end
end
