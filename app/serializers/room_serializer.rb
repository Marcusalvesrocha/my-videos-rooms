class RoomSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :avg_score

  belongs_to :user
  has_many :reviews
end
