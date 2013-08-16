class TasksController < ApplicationController
	
  def index
   @tasks = Task.all
   @tasks = @project.tasks.all
  end
  def create
    @project = Project.find(params[:project_id])
    @task = @project.tasks.create(params[:task].permit(:name, :completed))
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
   @task.update(params[:task].permit(:name, :completed))
 
   redirect_to projects_path
  end
end
