class WelcomeController < ApplicationController
  def index
    @component = Welcome.new
    @component.run()
  end
end
