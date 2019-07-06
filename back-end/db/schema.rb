# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_06_145624) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "future_visits", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "park_id"
    t.string "title"
    t.text "description"
    t.string "season"
    t.integer "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["park_id"], name: "index_future_visits_on_park_id"
    t.index ["user_id"], name: "index_future_visits_on_user_id"
  end

  create_table "park_images", force: :cascade do |t|
    t.bigint "park_id"
    t.string "title"
    t.string "altText"
    t.string "url"
    t.string "caption"
    t.string "credit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["park_id"], name: "index_park_images_on_park_id"
  end

  create_table "parks", force: :cascade do |t|
    t.string "latLong"
    t.string "name"
    t.string "fullname"
    t.string "parkCode"
    t.string "states"
    t.string "designation"
    t.string "url"
    t.text "description"
    t.string "weatherInfo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "past_visits", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "park_id"
    t.string "title"
    t.text "description"
    t.string "season"
    t.integer "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["park_id"], name: "index_past_visits_on_park_id"
    t.index ["user_id"], name: "index_past_visits_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "userName"
    t.string "password_digest_string"
    t.string "firstName"
    t.string "lastName"
    t.string "profilePicture"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "future_visits", "parks"
  add_foreign_key "future_visits", "users"
  add_foreign_key "park_images", "parks"
  add_foreign_key "past_visits", "parks"
  add_foreign_key "past_visits", "users"
end
