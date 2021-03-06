module Api
  class UsersController < ApplicationController
    include ErrorSerializer
    skip_before_action :authenticate_user, only: [:create]

    def show
      render json: User.find(params[:id])
    end

    def create
      user = User.new(user_params)
      if user.save
        render json: {}, status: 200
      else
        render json: ErrorSerializer.serialize(user.errors), status: 422
      end
    end

    private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
  end
end