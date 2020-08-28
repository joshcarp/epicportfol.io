


# itproject
## Integration Diagram
<img src="https://plantuml.com/plantuml/svg/~1UDgCZarBmq0GXk_pAyPJJu6sYdWefH-9ugK1YNWeKjRDq5sxknDc9seH_xkKYEUyf-5vNcPcCZemcU2e_5NNpqtzKEsgftLJbRYjomgB0iiQTtM3LVdONFrNHsyT_IkiiXhHFWPGhu7GQoVyJbR1-POmAmcndZk2R4qWZEOBPxVNTpVeo1-TGZxvr1an4It7ZXCbnMz0t1XxEWhtgTroOC7xm6B2Y_DA5ylIaWnc4umz0U9QX3y7j1KVCoVuWRtfrL5IRutIAvgCXoak5iuVNRZSNovXtxuDOWQ7AHR5yZBjANtmUU1pECm7FeKLfRQFuJS00F__6aDr6000">




## Application Index

| Application Name | Method |
|----|----|
| EchoService | [Echo](#EchoService-Echo) |
| authenticate | [Login](#authenticate-Login) |
| authenticate | [Register](#authenticate-Register) |
| authenticate | [RenewJWT](#authenticate-RenewJWT) |

## Type Index

| Application Name | Type Name |
|----|----|
| itproject | [EchoRequest](#itproject.EchoRequest) | 
| itproject | [EchoResponse](#itproject.EchoResponse) | 
| itproject | [LoginRequest](#itproject.LoginRequest) | 
| itproject | [LoginResponse](#itproject.LoginResponse) | 
| itproject | [RegisterRequest](#itproject.RegisterRequest) | 
| itproject | [RegisterResponse](#itproject.RegisterResponse) | 
| itproject | [RenewJWTRequest](#itproject.RenewJWTRequest) | 
| itproject | [RenewJWTResponse](#itproject.RenewJWTResponse) | 



# Applications




## Application EchoService


- EchoService is a basic service to test connections 






### <a name=EchoService-Echo></a>EchoService Echo

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCZp5F-p0GnNT_YlVlakLlY91OaEEs8XPYe97QC7MeZ7ig1iUERBT2V7gKK507XhpjxltktLqnMQmeC4bdTFdSDWzgfTRBLjMuRse5pb4tM3KjLFtO_lj59wTElfKjKjOn7pl7JF0v1eUPCgzXG_5a3SsW4tObI-_Mzphg3ft-UAAKz84szfDmSrkoRBCZN4n1yB5aLVLN6rN5jbpkIjnzOzfaUzAPXarRmVde21DSY7XnHv8szp6yaSbN0x-cr0UVI5oFY8GuiuT8vENyF-O_bcHxkanVaDyFltu5003__tIXSsi0">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDgCaB_AmZ0SHVSynVswz1EjE4ifBIQ8ImCbpXBIq4Rwp_pIINnt4SGvPpvSBgUae7rOnu6bqR0qHHHVjRegUHQrQ2ebE4wI2sGPk4Gj5GI_gB-V6hqQ_PMPGHCXSTEoXWIQS3iWp_7FTxCtlMitS67nyzsQi1UcdnlxM2q550MUR8lH4kdEuWWAtaqTUx7IJksds3i00F__-0H2zW00">


</details>


<details>
<summary>Response types</summary>




EchoResponse is the response from the EchoService 

<img src="https://plantuml.com/plantuml/svg/~1UDgCq44BWZ0Onl7xFiMJ5uioEeU8qaPqSI3h76CEDTJ9tdMAldi44HttF_zuUNbA2jg7npIoD3gMfeZgIwkhacTHYwPIWkCakK2MWKlKKa7mYrhzQFJLw5-P6JKH4c5wrrXQt4msWIRS3iXphFdEUTCFxGP3MBoxMnFs_nP5WIVROh94khCuWe8VvewzM6ddzhFSEm00__ywP4Nw">


</details>


---




## Application authenticate


- authenticate is the miroservice that handles authentication and issues JWTs to 
use with other services 






### <a name=authenticate-Login></a>authenticate Login
Login is used to login and to acquire a jwt 

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCaB5Eyp0KHdS_nVTtwV8RN2IMAd5RaGWXGIELC7M8dEIg65AxifqAyVGeQO0C3BcZpz7nrPrF7ZQVOz8CwkObp-xJRRhRv6c2kon9mJcI3DiiHveyvFz-rCdLoRkojG_AXVROiCgQu6o3cMh3AvcWAnLe1kLH25Qhe4hb2REwlBmjc7_NvgISEkAeFfx8UtMWP_r9kBaLBEZG4COfH1oFzg0DY-E_0UAOxRai19Q3gQgWpvrI25O8S8aUbihhQjpGrZ0KWijYWIKS1QVfJ6WzEORVoAAJ8ivxwm9h6kDz1xiVeiesrg5iMf8wd9nzeofSzKljo9-iyHHTzuv4DCW7HsJawZzMtqYoSLwmDPcwE_LN0000__-Wlfnc">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNwFdafsVc1QKMbgOMboWf91Ohn1lOs2XekEZa5oLdPAPeAjZPALHprN8vfEQbW0864000___-pZgr">


</details>


<details>
<summary>Response types</summary>




LoginRequest is the response object from Login that is used in bearer authentic
ation in the header: "Bearer <JWT>" 

<img src="https://plantuml.com/plantuml/svg/~1UDgCqB6gmZ0Knl4zJ_7TBhsY5MSffSK44QI14cSfRQWfDIav4GVntKKGmIt_-SVXy9KKMXzkrucbqR4qHLGVMfsKt8jQD9KI73l91R8CNAAM2e8VrD-NHb-D_fLrKqk4vEW6OnjDixEa4xI4ymPvZd--Shwxc7u14sRlHjs5zGz6KU31bXZl0LjGyCOExCbARVltRgy0003__xnOHLu0">


</details>


---


### <a name=authenticate-Register></a>authenticate Register
Register is used to register a user and acquire a jwt 

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCq45B-q0G1V3xV8htxwMN_seYU2d9jiK4yM03DPvw2DjagAlffknEHFpqqjhQWWYPuywFzvOP3nuQZp5eZdJ-N1Rt-I9VpiiymrsHvL0AMO55KIBF7if_FtHmwk2_qYo8yT9lMwex9xvhCJAzlB0JMnlX4Kn05L5ZnAnDO8oQzVTRJE7DkftnPekj-NZa4Co6d-mdu-Os8h7ICYwZa2WiUME3iASq_NE7DAMLqbM4oTcRMkpx7bOHeOgKhc9CO5rWB-W3UyAPn8GgXjBuZHg-PAj4gKDFKdTjvx5kUzPMThvxvLgkJkrB3hlE1Kwk3qmZEVgDPtPw-X_JqqhJPKD4CtRD_hXV0G00__ynpvb1">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDgCqKzB0p4G1V1xFiMpbrLgnREKqcA2UDc59PubRAOraltZp0GFudSNGQHwoZi-VWm3RoyQMCkOJLCTqpIeoWyzFFdkmRMkFtXdSTzPXyq6jaFRUJZxw2z-QVNLwb_Da8C8LcbQYguG1C-ts6vnQQzd7bvIl4BIXUTN6lIcfrCI9UxfhP0eTZjyc3Le32dZ3gASffDPurXoRiD8vzqIHDvdZdywfYCnK_oFYn2dC_ffzZJ5xnc-0W00__yiN5_g">


</details>


<details>
<summary>Response types</summary>




RegisterResponse is the response from the registration services 

<img src="https://plantuml.com/plantuml/svg/~1UDgCqC4AWa0Gnl7xFiMN5uioEeU8qYxHnGNPpY6ws8gfx4nqYDuzWkZGQV_d7yFmvSIrv_jj475m8euHr9SMPwEFgbHLOPJ4GKk5987KABM1aYUp-D7Wgy6_YcQeYH1LjdF4rbUMvcaa6w4cN7P8KopbPlBDrRKhE9xzrDk6j_yUMOQdMAD_CFOWzcxin4laTcm_wxq3003__umLH_O0">


</details>


---


### <a name=authenticate-RenewJWT></a>authenticate RenewJWT
RenewJWT is used to reissue JWTs that have expired 

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCpy5Bmp0K1l1x_ehdBhqOBO8NQRCD6qJH5Mh4mmubPeyQJPEIlAhuryl6r5q6_QxVBnzvsUImB8D9sTFbawflv4esIoKhkAuh2Pn3LSEgLY2hMtNoHoUlJluhMoJIaSRUCHCynU1WfaTwHK_MQC8Pw0HjpjAxzOEEkeTUVprWIhh3H_kDS76PCxBa40wVGS6XGO-VTy-AbUNH3igIhRbeSxZwzzgG_TZ2DcVhWlDTMvZWGeGNDwAmDCJmXeRExaDdVODf23vXSRup0eezxYAY5_DJcFzMWctmS7w1VhEz_IS00F__zR1wLm00">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNwFdafsVc1QKMbgOMboWf91Ohn1lOs2XekEZa5oLdPAPeAjZPALHprN8vfEQbW0864000___-pZgr">


</details>


<details>
<summary>Response types</summary>




LoginRequest is the response object from Login that is used in bearer authentic
ation in the header: "Bearer <JWT>" 

<img src="https://plantuml.com/plantuml/svg/~1UDgCqB6gmZ0Knl4zJ_7TBhsY5MSffSK44QI14cSfRQWfDIav4GVntKKGmIt_-SVXy9KKMXzkrucbqR4qHLGVMfsKt8jQD9KI73l91R8CNAAM2e8VrD-NHb-D_fLrKqk4vEW6OnjDixEa4xI4ymPvZd--Shwxc7u14sRlHjs5zGz6KU31bXZl0LjGyCOExCbARVltRgy0003__xnOHLu0">


</details>


---





# Types







<a name=itproject.EchoRequest></a><details>
<summary>itproject.EchoRequest</summary>

### itproject.EchoRequest


- EchoRequest is the request object for EchoService 

<img src="https://plantuml.com/plantuml/svg/~1UDgCq4qBWa0Gnl7xV8edBnObT0uHfHsYYmkodMFHHGLVo5bFqNUF8ABZ_iy_Xk79nTl5h-D0SN0KnmZgIukRqHSkkIeCAvorOYG9b4Qf3LXTpUP7Wwy6_qhrO4KGSTtDbNkiJdm4AxWVaQROgiEyr5tVxF07a6LuqXwZ4x6jmmdYbtvgwKMvcvhFMky0003__-CCGIm0">
<a href="https://plantuml.com/plantuml/svg/~1UDgCqB6gmZ0Knl4zJ_7TBhsY5MSffSK4SMcWn5b26jfAssXEEedlBeA8O_xpZyFXAobe7vPfP6bqB4qHrOTMPoMFeXPDfGJ7GNA1B0ENgAM2u2VrzwNHLwD_PMRKH4Y4wLrZxukba40JBZlaEVxvnddJ3-qAGxXvTxKcR7yeYW8FjiPaYNHdiGS5FymTUxBIpkrxjrS0003__wMqHIu0">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| message | string | |

</details>
<a name=itproject.EchoResponse></a><details>
<summary>itproject.EchoResponse</summary>

### itproject.EchoResponse


- EchoResponse is the response from the EchoService 

<img src="https://plantuml.com/plantuml/svg/~1UDgCqBsgma0GnV5-dkBSDBcY0Mi98S4Tn2OBOQrbIPOaa0_PMIlntKKGiTn__MCOJYd1-d2V9qgZepH5L1zQNOm-SSrDPLZXg1KZow0qQct0wcp-lZJwQlIlr4vM10ctmzeukQsBk0HMSDqZp_6lTgjlXx7Ru5UWAF2WBMOdOdk70oJuSUdfIQLRklTUhm000F__Rxv1-000">
<a href="https://plantuml.com/plantuml/svg/~1UDgCq44BWZ0Onl7xFiMJ5uioEeU8qaPqSI3h76CEDTJ9tdMAldi44HttF_zuUNbA2jg7npIoD3gMfeZgIwkhacTHYwPIWkCakK2MWKlKKa7mYrhzQFJLw5-P6JKH4c5wrrXQt4msWIRS3iXphFdEUTCFxGP3MBoxMnFs_nP5WIVROh94khCuWe8VvewzM6ddzhFSEm00__ywP4Nw">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| message | string | |

</details>
<a name=itproject.LoginRequest></a><details>
<summary>itproject.LoginRequest</summary>

### itproject.LoginRequest


- LoginRequest is empty because the Bas64(username:password) is contained in the 
header of the request 

<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQN-EIdP-O5fHQMfXQNA2aa5Yl46zZOA6YuwEGN9MTafcWgsDafL7FLSZcavgM0mWKG003__yg9EeS0">
<a href="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNwFdafsVc1QKMbgOMboWf91Ohn1lOs2XekEZa5oLdPAPeAjZPALHprN8vfEQbW0864000___-pZgr">Full Diagram</a>

</details>
<a name=itproject.LoginResponse></a><details>
<summary>itproject.LoginResponse</summary>

### itproject.LoginResponse


- LoginRequest is the response object from Login that is used in bearer authentic
ation in the header: "Bearer <JWT>" 

<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oie-UIdP-O5fHONvESLfoef91Ohn1iesDWeQBZev1SbPsIcQ2gWA56mirEevj9Mo2elKR1IA2ufoinBvwhbSaZDIm655Y000F__-FH1N000">
<a href="https://plantuml.com/plantuml/svg/~1UDgCqB6gmZ0Knl4zJ_7TBhsY5MSffSK44QI14cSfRQWfDIav4GVntKKGmIt_-SVXy9KKMXzkrucbqR4qHLGVMfsKt8jQD9KI73l91R8CNAAM2e8VrD-NHb-D_fLrKqk4vEW6OnjDixEa4xI4ymPvZd--Shwxc7u14sRlHjs5zGz6KU31bXZl0LjGyCOExCbARVltRgy0003__xnOHLu0">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| jwt | string | |

</details>
<a name=itproject.RegisterRequest></a><details>
<summary>itproject.RegisterRequest</summary>

### itproject.RegisterRequest


- RegisterRequest contains all the information to register the user in the databa
se 

<img src="https://plantuml.com/plantuml/svg/~1UDgCqK5Bn30G1U1xViLpBrNM1S-oBBkO85uQAF4iePdMGDhgJ887yR-B859xoZi-FeQ1TvRiEPSfgQOwgcbGbLzwUNRsqRIckpYZyM2rmU40RT5Q1wEVtDKVhRvQ_QlganV1hgCnIYRkwBsGv1syuEKEnoEkzUt2_MiCDzWWd4xuL7lGv6F2FIHpd4Urnr1IQlr4w-xDYtmi7FvrJ0CnKzZY8iHnHR_KcURmCyDt0000__z4Nr_c">
<a href="https://plantuml.com/plantuml/svg/~1UDgCqK5B0p4G1U1xViMpbrLgnREKqcA2UDd04iyIDjCQoNRNcGGFudyNGMIxfxpZusCOU7l9ddCPacggeve6LVcZXnTddqnhkeCp6ezM6smsq1QjTJ3wsLtzq-ghrR-gFdaHh3ewHSd47NqKaho25xpUOxl5jRuTkN-BuGOnJpo-Kv_l5Xox7RxK6ZJucF00oHpF9xN6iQJK-e7ctUH5FaSE5ntJaPWfB74HuZYZtsfFv_0xo4y0003__sryO-W0">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| email | string | |
| fullName | string | |
| password | string | |
| preferredName | string | |
| userid | string | |

</details>
<a name=itproject.RegisterResponse></a><details>
<summary>itproject.RegisterResponse</summary>

### itproject.RegisterResponse


- RegisterResponse is the response from the registration services 

<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oie1QMcPnQNf1O5fHONvESLfoef91Ohn1iesDWeQBZev1SbPsIcQ2gWgrAmirEevj9Mo2elKR1IA2ufoinBvwhbSaZDIm656I000F__hxD3z000">
<a href="https://plantuml.com/plantuml/svg/~1UDgCqC4AWa0Gnl7xFiMN5uioEeU8qYxHnGNPpY6ws8gfx4nqYDuzWkZGQV_d7yFmvSIrv_jj475m8euHr9SMPwEFgbHLOPJ4GKk5987KABM1aYUp-D7Wgy6_YcQeYH1LjdF4rbUMvcaa6w4cN7P8KopbPlBDrRKhE9xzrDk6j_yUMOQdMAD_CFOWzcxin4laTcm_wxq3003__umLH_O0">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| jwt | string | |

</details>
<a name=itproject.RenewJWTRequest></a><details>
<summary>itproject.RenewJWTRequest</summary>

### itproject.RenewJWTRequest


- RenewJWTRequest is empty becayse Bearer <JWT> should be used with this method 

<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQN1ANcfPPxXOS4fHQMfXQNA2aa5Yl46zZOA6YuwEGN9MTafcWgsDafL7FLSZcavgM0WWOG003__tzhEuG0">
<a href="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNw0MbvgMMUuM71AKMbgOMboWf91Ohn1lOs2XekEZa5oLdPAPeAjZPALHprN8vfEQbWC864000__-qEZko">Full Diagram</a>

</details>
<a name=itproject.RenewJWTResponse></a><details>
<summary>itproject.RenewJWTResponse</summary>

### itproject.RenewJWTResponse


- RenewJWTResponse is used to renew jwts 

<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oie1QNcfPPxXOS4fHONvESLfoef91Ohn1iesDWeQBZev1SbPsIcQ2gWgrAmirEevj9Mo2elKR1IA2ufoinBvwhbSaZDIm656I000F__YiD3LW00">
<a href="https://plantuml.com/plantuml/svg/~1UDgCqB4AmZ0KXU4zJt7iKaKhpb9AYmcYGmCbuYYb3TfIav8RwI2-kmZYu9H__hXSJaw-Tlvn7rWS78jZ1FMbnKd9lIX5LIZ1iPDS84d09Kgf8FX1pNuq-6hmhwmPQY94bJPwEfvLfMcqXdI4cd3P84qnvolhcblNBj3vqTbUDtxzxv5bUB8b-ibZ2_AkCrVsOhasxMUzTm000F__P0z7M000">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| jwt | string | |

</details>

<div class="footer">
