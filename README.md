
# MadCamp Week4: Musing with Spotify

### 팀원

> 류수현, 이현지, 장진혁

### Summary

> 음악을 들을 수 있는 웹사이트로, Spotify API를 이용해 다른 사람들이 만든 플레이리스트를 찾고 나만의 음악 감상 공간인 "Musing Room"에서 음악을 들을 수 있다.
> 
> 개발에는 React를 사용하였고, Firebase를 통해 DB를 구축하였다.

## Contents
### Login
<img src="https://user-images.githubusercontent.com/79245586/127550826-96ed4d53-c122-4ecd-aa18-7511e4c3f49b.png" width="48%"> <img src="https://user-images.githubusercontent.com/79245586/127551223-a54e2d0f-ae5b-4a88-853d-89cb4d65e774.png" width="48%">


> 로그인 창.
> 
> 가운데의 책을 클릭할 시 페이지가 열리며 사용자를 초대하는 초대장이 나온다. 거절을 클릭할 시 책이 다시 닫히며, 수락을 클릭할 시 Spotify 로그인 화면으로 넘어간다.


### My Room
<img src="https://user-images.githubusercontent.com/79245586/127551456-daaf0b10-b0c2-42b2-b8ba-46b9839086c6.png" width="48%"> <img src="https://user-images.githubusercontent.com/79245586/127551566-04d0e3ae-de99-4590-a679-0e93ae714f4e.png" width="48%">


> 로그인 직후의 화면으로, 책장에서 현재 내가 저장한 플레이리스트의 목록을 확인할 수 있다.
>
> 앨범 이미지 위에 커서를 올리면 앨범의 평균 색깔로 뒤편의 조명이 켜지며, 앨범을 클릭할 시 플레이리스트가 왼쪽으로 밀리며 PLAY와 ADD 두 개의 버튼이 나오게 된다.


### Musing Room
<img src="https://user-images.githubusercontent.com/79245586/127551857-038a27bf-6415-4282-8fde-c4013c72b4c2.png" width="48%">


> My Room에서 축음기 버튼을 눌러 들어갈 수 있으며, 왼쪽의 커다란 LP판에서 선택한 음반이 돌아가며 재생된다.
>
> 아래에서 플레이 바를 확인할 수 있고, 일시정지/다음 곡 버튼을 통해 곡을 변경할 수 있다. 또한 우측의 플레이리스트에서 곡을 클릭하여 선택하는 것도 가능하다.


### Dashboard
<img src="https://user-images.githubusercontent.com/79245586/127552422-1a55eece-e6f4-4007-81c0-9e5bebbfdea0.png" width="48%">


> 곡을 검색하여 추가할 수 있다.
