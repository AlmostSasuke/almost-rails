 include ActionView::Helpers::TagHelper
 include ActionView::Context 
class Welcome < ApplicationRecord
  
 def run
    names_json = File.read("#{Rails.root}/mock/mock.json")
    names = JSON.parse(names_json)
    @names_arr = names['names']
    @welcome_html = '' 
    content_tag :div do 
      @names_arr.each do |name|
        @welcome_html << content_tag(:div, "Family: #{name['family']}, Name: #{name['name']}")
      end
    end
    @names_arr
  end
end
