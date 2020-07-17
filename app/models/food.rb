class Food < ApplicationRecord
  belongs_to :restaurant
  belongs_to :order
  has_one :line_food
  has_many :foods_orders
end
