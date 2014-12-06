class ProjectsController < ApplicationController
respond_to :html, :json, :xml
#load_and_authorize_resource :except => [:index, :show]
before_filter :authenticate_user!, :except => [:index, :show]
def index
   respond_with(@projects = Project.all)
   @project = Project.new
end

def show
    @project = Project.find(params[:id])
end

def new
  @project = Project.new
end

def create
    @project = Project.create(:name => params[:name])
    @project.user = User.find(session[:user_id]) if session[:user_id]
    authorize! :create, @project
    @project.save
    redirect_to projects_path
end

def edit
    @project = project.find(params[:id])
    authorize! :edit, @project
end

def update
  @project = Project.find(params[:id])
  @project.update(params[:project].permit(:name))
  authorize! :update, @project
  redirect_to projects_path
end

def destroy
  @project = Project.find(params[:id])
  authorize! :destroy, @project
  @project.destroy
  redirect_to projects_path
end

end
