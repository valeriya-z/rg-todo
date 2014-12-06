class TasksController < ApplicationController
  before_filter :authenticate_user!, :except => [:index, :show]
#  load_and_authorize_resource :project
#  load_and_authorize_resource :task, :through => :project
	def index
   @tasks = @project.tasks.all
  end
  def create
    @project = Project.find(params[:project_id])
    authorize! :create, @project, @task
    @task = @project.tasks.create(params[:task].permit(:name, :completed, :document))
    redirect_to projects_path
  end
  def destroy
    @project = Project.find(params[:project_id])
    @task = @project.tasks.find(params[:id])
    @task.destroy
    redirect_to projects_path
  end
  def edit
   @project = Project.find(params[:project_id])
   @task = @project.tasks.find(params[:id])
 end

 def update
   @project = Project.find(params[:project_id])
   @task = @project.tasks.find(params[:id])
   @task.update(params[:task].permit(:name, :completed, :document))
   @task.document = params[:task][:document]
   redirect_to projects_path
  end
  
  def toggle
    @task = Task.find(params[:id])
    respond_to do |format|
      format.js do
        if (@task.completed != true)
          @task.completed = true
        else
          @task.completed = false
        end
        @task.save
        render :nothing => true
      end
  end
end
end
