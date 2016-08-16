class Welcome < ApplicationRecord
  def run
    names_json = File.read("#{Rails.root}/mock/mock.json")
    JSON.parse(names_json)
  end
end
