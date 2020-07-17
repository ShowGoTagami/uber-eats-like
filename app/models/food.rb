class Food < ApplicationRecord
  belongs_to :restaurant, optional: true
  belongs_to :order, optional: true
  has_one :line_food
  has_many :foods_orders
end
