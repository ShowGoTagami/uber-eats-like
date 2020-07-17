class Order < ApplicationRecord
  has_one :food, through: :line_food

  validates :foods_count, numericality: { greater_than: 0 }
end
