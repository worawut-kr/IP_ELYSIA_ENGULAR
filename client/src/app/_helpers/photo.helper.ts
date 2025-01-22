/*import { User } from "../_models/user";

function getAvatar(user: User): string {
    if (user.photos) {
      const mainPhoto = user.photos.find((p) => p.is_avatar === true);
  
      if (mainPhoto) {
        return mainPhoto.url;
      }
    }
  
    return _defaultPhotoUrl; //Cannot find name '_defaultPhotoUrl'.ts(2304)
  }
  
function getPhotoOfTheDay(user: User): string {
    if (user.photos && user.photos.length > 0) {
      const index = Math.floor(Math.random() * user.photos.length);
      return user.photos[index].url;
    }
  
    return _defaultPhotoUrl;
    }
  
  export const PhotoHelper = {
    parseUser: function (user: User): User {
      user.avatar = getAvatar(user);
      user.photoOfTheDay = getPhotoOfTheDay(user);
      return user;
    },
  };*/
  
  