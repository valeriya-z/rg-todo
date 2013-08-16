class ProjectsController < ApplicationController

respond_to :html, :json, :xml

def index
   respond_with(@projects = Project.all)
   @project = Project.new
end

def show
    @project = Project.find(params[:id])

#    respond_to do |format|
#    format.html # show.html.erb
#      format.xml  { render :xml => @project }
#    end
end

  # GET /projects/new
  # GET /projects/new.xml
def new
  @project = Project.new

#  respond_to do |format|
#  format.html # new.html.erb
#  format.xml  { render :xml => @project }
#  end
end

  # GET /projects/1/edit
  # project /projects
  # project /projects.xml
  def create
    @project = Project.new(params[:project].permit(:name))
    @project.save
    redirect_to projects_path
#    respond_to do |format|
#      if @project.save
#        format.html { redirect_to(@project,
#                      :notice => 'project was successfully created.') }
#        format.xml  { render :xml => @project,
#                      :status => :created, :location => @project }
#      else
#        format.html { render :action => "new" }
#        format.xml  { render :xml => @project.errors,
#                      :status => :unprocessable_entity }
#      end
#    end
  end

  def edit
    @project = project.find(params[:id])

 end

 def update
  @project = Project.find(params[:id])
 
  @project.update(params[:project].permit(:name))
    redirect_to projects_path
  end

  def destroy
  @project = Project.find(params[:id])
  @project.destroy
 
  redirect_to projects_path
end

def add

  Project.create(:name => params[:name])
   redirect_to :action => 'index'

end

end
