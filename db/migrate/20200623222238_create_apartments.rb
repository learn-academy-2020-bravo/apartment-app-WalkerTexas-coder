class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.integer :user_id
      t.string :street
      t.integer :apt_num
      t.string :city
      t.string :postal_code
      t.string :state
      t.string :country

      t.timestamps
    end
  end
end
