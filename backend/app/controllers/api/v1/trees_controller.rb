class Api::V1::TreesController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index
    @trees = Tree.all
    if @trees
      render json: {
        messages: "Show trees",
        data: @trees
      }, status: :ok
    else
      render json: {
        messages: "Can not show trees"
      }, status: :unprocessable_entity
    end
  end

  def show
    @tree = Tree.find_by(id: params[:id])
    if @tree
      render json: {
        messages: "Show tree",
        data: @tree
      }, status: :ok
    else
      render json: {
        messages: "Can not show tree"
      }, status: :unprocessable_entity
    end
  end

  def create
    @tree = current_user.trees.build(tree_params)
    if @tree.save
      render json: {
        messages: "Create tree successfully",
        data: {
          tree: @tree,
          user: @tree.user
        }
      }, status: :created

      @land = @tree.land
      current_tree_count = @land.tree_count
      @land.update_attribute(:tree_count, current_tree_count + 1)

      @user = @tree.user
      current_tree_count = @user.tree_count
      @user.update_attribute(:tree_count, current_tree_count + 1)

      @area = @tree.land.area
      current_tree_count = 0
      @area.lands.each do |land|
        current_tree_count += land.tree_count
      end      
      @area.update_attribute(:tree_count, current_tree_count)
    else 
        render json: {
          messages: "Create tree failed",
          errors: @tree.errors
        }, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
  end

  def area_trees
    @area = Area.find_by(id: params[:id])
    array = []
    
    @area.lands.each do |land|
      array << land.trees
    end

    render json: {
      Trees: array
    }, status: :ok
  end

  def land_trees
    @land = Land.find_by(id: params[:id])
    array = []
    
    @land.trees.each do |tree|
      array << tree
    end

    render json: {
      Trees: array
    }, status: :ok
  end

  private

  def tree_params
    params.require(:tree).permit(:user_id, :land_id, :tree_type_id, :treeimg, :name_fake)
  end
end
