

export const goToHome = (navigate) => {
  navigate("/")
}
  
 export const goToProfilePage = (navigate, name) => {
    navigate(`/profile/${name}`)
 }