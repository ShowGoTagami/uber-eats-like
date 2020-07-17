class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant

  validates :count, numericality: { greater_than: 0 }

  scope :active, -> { where(active: true) }
end
