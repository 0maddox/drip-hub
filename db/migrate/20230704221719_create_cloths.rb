class CreateCloths < ActiveRecord::Migration[7.0]
  def change
    create_table :clothes do |t|
      t.string :size
      t.string :type
      t.string :price
      t.string :image_url
      t.string :description

      t.timestamps
    end
  end
end
