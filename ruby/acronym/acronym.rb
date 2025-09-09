class Acronym
  def self.abbreviate(words)
    words.split(/[\s-]/)
      .map { |word| word.chars.find { |char| char.match?(/[a-zA-Z]/) }&.upcase }
      .compact
      .join
  end
end
