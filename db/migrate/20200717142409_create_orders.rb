class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.references :food, null: false, foreign_key: true
      t.integer :foods_count, null: false, default: 0

      t.timestamps
    end
  end
end
