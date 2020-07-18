module Api
  module V1
    class OrdersController < ApplicationController
      def create
        posted_line_foods = LineFood.where(id: params[:line_food_ids])
        ActiveRecord::Base.transaction do
          posted_line_foods.each do |line_food|
            order = Order.new(
              food_id: line_food.food.id,
              foods_count: line_food.count,
            )
            order.save!
            line_food.update_attributes!(active: false)
          end
        end
      end
    end
  end
end
