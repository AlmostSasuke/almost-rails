class WelcomeController < ApplicationController
  def index
    @component = Welcome.new
    @names_arr = @component.run
  end
end
