# National Parks Navigator
### Models:

#### Park: 
##### Relationships
  * has_many :past_vists
  * has_many :past_vistors, through: :past_vists, class_name: "User"
  
  * has_many :future_vists
  * has_many :future_vistors, through: :future_vists, class_name: "User"
##### Columns
  * latLong: string,
  * name: string,
  * fullname: string,
  * parkCode: string,
  * states: string,
  * designation: string,
  * url: string,
  * description: text,
  * weatherInfo: string
  
  * operatingHours?
  * entranceFees?

#### ParkImages
##### Columns
* park: references,
* title: string,
* altText: string,
* url: string,
* caption: string,
* credit: string,

#### User:
##### Relationships
* has_many :past_vists
* has_many :past_parks, through: :past_vists, class_name: "Park"
  
* has_many :future_vists
* has_many :future_parks, through: :future_vists, class_name: "Park"

##### Columns
* userName: string,
* password_digest: string,
* firstName: string,
* lastName: string,
* profilePicture: string

#### PastVisit:
##### Relationships
* belongs_to :user
* belongs_to :park
  
##### Columns
* user: references,
* park: references,
* title: string,
* descriptoin: text,
* season: string,
* year: integer,
  
#### user_images?

#### FutureVisit
##### Relationships
* belongs_to :user
* belongs_to :park
##### Columns
* user: references,
* park: references,
* title: string,
* descriptoin: text,
* season: string,
* year: integer,
