


# itproject
## Integration Diagram
<img src="https://plantuml.com/plantuml/svg/~1UDgCparByq0GmF7xVefvJZq5-iQ3XrBwaYXU6f28Xo9bt8pTjPkTC3j1HVpkKg8zz9GvBVl_xSjey9ZH20RDBrq_LkLTiIiUrbMHmxRC2yWoo4lObHKK-Ntrxq87tphuhsQL54Mx9XZr6WYyji9lPDKuNnCa9I7MpvPCiXW86lo0oV_PpHmS-QDJaqu-jYZOWEMcvKXHuSi0RD2UZi9ThBSSME0si61uSbxfN5bgahvi0jgJ0LYBy7k_jHNV98xcs-nRuLSVA3q39ZYCOR5m_kZ2-UtbqkphbpvCp64CMROyh_Q9KAphm_Jgn65wOLqR6EkUpQxPxCAmKqTHlKMb7i-lyVmFhoZMNHD-0W00__y7ufA5">




## Application Index

| Application Name | Method |
|----|----|
| EchoService | [Echo](#EchoService-Echo) |
| authenticate | [Login](#authenticate-Login) |
| authenticate | [Register](#authenticate-Register) |
| authenticate | [RenewJWT](#authenticate-RenewJWT) |
| profiles | [getuser](#profiles-getuser) |
| profiles | [updateuser](#profiles-updateuser) |
| search | [search](#search-search) |
| upload | [upload](#upload-upload) |

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
| itproject | [artifact](#itproject.artifact) | 
| itproject | [getuserRequest](#itproject.getuserRequest) | 
| itproject | [job](#itproject.job) | 
| itproject | [profile](#itproject.profile) | 
| itproject | [searchRequest](#itproject.searchRequest) | 
| itproject | [searchResponse](#itproject.searchResponse) | 
| itproject | [singleSearchResponse](#itproject.singleSearchResponse) | 
| itproject | [updateuserResponse](#itproject.updateuserResponse) | 
| itproject | [uploadRequest](#itproject.uploadRequest) | 
| itproject | [uploadResponse](#itproject.uploadResponse) | 



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




<img src="https://plantuml.com/plantuml/svg/~1UDgCaK5B0p4GHk_v5P-zh58hdgMK5XF4oouiwrd2PbeZsUmwCy63-Dz54B6UyewFnp3mxKKzQvcIQQenJOCgVjB3qz0zkDRrXy5Pt7VMORE1xT1s0vnz72v-q-ghrR-QCNaHh69UYgxW1S-ts6vnQQzd7bzYk4BKXUTN6lMcfrCK9UxfhP0eTZjyc3LeyZ7X3g8SyyciSImfjNwYlsxn8kypXpF7T2Hc2l_Z8iJvp7sQFUNmFSHN0000___nA62-">


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







## Application profiles






### <a name=profiles-getuser></a>profiles getuser

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCaC5Ej30KXVTzYlFFPZP_5KpS6EZCH8XnuP0ehcP12bn9jL3I5cDyUiCCWxDmmLtUx-lfoLql7hPUOz5CwkurpnxIVVgyozC4zrcIWdCa6VPPZZHvpF_DwkBKnLtPrdbf_T1gLfdEMwEnwgrvKvhS2jAX25WjlIob8wpgyhGBcVjGNI-jRD7AhoToJZRqehu9DxS1yyfhmZa64KT3Vd1aMHp_jKOSimCNHO2xsPILLv_IqrW0HS154PveCGKm_2hXg4IS7vsPrtHf74O-_X1LHXkBKWyabE-jUQVANqslekiZ5OWchR54dTZyn-QC1BiC3jYMkdgytqy0003__vZsZdu0">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDgCaC6AmZ0OXEzvYjbUkijQyIobj9WWNXeeyIob3JLIsvh_pqbyToc8vtp7uMCOfYHkFOVxAD9eH9eYYezQdOq-gberbL4I1oqLiWnIezO6IfxCprUDRetUAhgn9KBYfYLmWfPmsI7FyIiti--khl-3uyNFDzlnTh0SoFh6Fe8bHb7WAVwnHgx77iJUJODuYT9E_VhPEm00__-LnaGT">


</details>


<details>
<summary>Response types</summary>





<img src="https://plantuml.com/plantuml/svg/~1UDgCai5kip0GXEz-YlcvvAzJeYJ7A8eI5LJr4gIMdf4nJcjgR6gRGrNbtQk8a9AeIEoDsM7cqyfRvvdrJQN8PFIGoGIZvcpTlQR9OxoFdtTf7E4XYMA48Q84-oH573sb_oxMqQcZMGbNp3a4p7fvODox0CmXcsEznl_etbZ-BeixI5zRKmhkPvqHcms-oHI5SDpAsakZiOBpLketCeMI-gF_xQLNubSuThsboS-LYy7AqkHT6pTLpVHNFxbWNhWhuM-Y8OBQceDKeeLO3aASRHt8vLvOWT8NyTa8pGNMdRwXb4oHIzD741MJgYyS6gKopIhH5qydkKajJTu6divwksn_RFUrvBwnLt6D4_QwuaYo9MWO8fZFPZH0DhyL5cGhT75wzZy1003__wn3qDm0">


</details>


---


### <a name=profiles-updateuser></a>profiles updateuser

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCa45Fiq0GXk_pA-RhfPTl5Koy6DYs4M8yM9AAfnx806EpTc79xcAClzvGQSl5X3dky-pxJcOvUs2vn5apgfktF7jAj-bkawS9FcP9Ya9Wak4sop5DdlD_5tLswknTOUqyMTyt6YhJUciqBZfhtfLcjq1oM0HGawUI7EEYBd_VGd17rNPagS66lbxOEJhmg_fclBiFm2kl6Syn60dikveyzuujnF4V1ECOza8M0JvCVQgy-YJFmoPO148MuKKenYJ0gnKELYJ4IJD7m9gdS3-WeIAgZ3OMIzspLBwpveChVtCjth7hJEiukZs94gFnny4ojtBr7rTd967Q4S2Qstguw4y0003__yqDbXC0">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDgCai5kip0GXEz-Ylsvv2yfKP9Z54M92gfw2L9BpyWOfrrgR6gl3rMLTwyYGagY8h4tPfUPJoDl7N5BlbPiCdhOP0AZvdowUytInsIVFE-o98Q7D4uWYY1EOPzcaCHFsR_BwMZNqQnCAEuS1DmI7hWW5m1taCzXlOR_yRsnuXtBEq1ghAcae5bt29iDVBCfbD89YmsXqR02HnRr6vk2GltH_oOa9N-5OvTRcU8SkHYCh4pHfGbJDrn_zPrBJj9T2NyJ3H6WRZor2Cj1XCQQ0ohPOLpQWXM4uOlyz58B2UjEtuGXcqA1fWyWQuwgBnoyKhdcjUoBfq9kN2jJj8QdKc-NxO_jla51tbxPUIVjTSIHvKi8emY2-MmM1f3FRuK5sqfTdXxzJm000F__uHRG6m00">


</details>


<details>
<summary>Response types</summary>





<img src="https://plantuml.com/plantuml/svg/~1UDgCaB4AmZ0KHVTynRLB5Qpu0QMqc20k3PGuIsWVMAbDo4icyTz54EUS-N2vd9QZ3J4z5r5c8yeIMVpKxchqMVLgw8oIE6cfK5MG6hqsKF9YDdyrUpNxgnWNounYZZwu1utnaFna8oMcC11xjp8Li8pRiQwnbNiNnliyxT0qU8ctQ6cTlda-0G00__-EjJra">


</details>


---




## Application search






### <a name=search-search></a>search search

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCq3zFyp0G1l3Td-BUBbrUGuh4WXAt5OaG0urKmjGXkZX7Qd3io7OHujEZDEaVYIKtHNS_FK_a-UHXypbCcf6ktuhyATjastMHfV2Ofnbm3caEcxo0B7qk_ftfvDJ9_yfMFg0BXrOpQKrmLiFC4pgvdm5wA2DMOy0AFS6iheRTWlbFPJfqs4ABto_aFJRqgdu8xkuZ5bJG14C8n7pyOadoPmT9mdPSb14yd1JAeBumKDyCPSH5kJWVoyxPTwN9CxYmHSzYpe-knI3toZHmaJLTsrql-xfOMcqTLFf0GeNEsG-IuMResPBlhF4KtnwHW7ZKZICoOlaVbgUJODVv4LkHgVkt_0q00F__Z-gIT000">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDgCaBqAmZ0OHVSynRLB5QquIoaj9eXB0oNE4j9W8_qp-Jg9xow2EEVCXylbb86qfsNeMHeDIrD4yLEhgv9dKOkcKeBZ9Bb0be5Br591y8jQ_TNerUYlpFGw12Hkd1TAe0Dk1-GvrdmtUTEvTWD7ivyUrj0-MErDrzZdOWEXAF1YMv3r0uu8vDruPszMsh7z1li4003__xvcGi00">


</details>


<details>
<summary>Response types</summary>





<img src="https://plantuml.com/plantuml/svg/~1UDgCai5Bmp0OnU_vAvwzJ3DRkkiePSCMyRB2LiybPfzR94jhlkGa-zz5tCI2Gh_Zu_VUBuUiE2WVuicAsUGJinactGLTFxVDOxsfj-kshl3GL3NI55M3JTEYhfxQcnzqykhajmfj5JCI9kNrSKiyz8ufWM9qEOe2jzLzx_NHxEzWmk3xDz8X6zCeIto8EJnnj86nX9GxUe_aDA5WumwMTgD6AQKuNzMNshTpyR_pZvsh-SNqM8A3D-uWvdYDrdPEdUXtE1WTeXz5aScFiRFeSiWqHP9dcKpGBSIAtFxh0tm6003__v4MXpi0">


</details>


---




## Application upload






### <a name=upload-upload></a>upload upload

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCa3rFmp0GXlVx5KUNBXXI91QKkAr8X1Xef1Ac3j4rFYfJDuvi1o5-FSf7eH9BRhBkVVIyriqd3ypdE6b6TFrMv4_P9jkkYop5nppDK0XCSzpa1MRfSt7rYqwsJluhh7mW5zgJWShMmLc3ixOnbjGCoMCPWQ90U_ACCxKVTWlmHrqtvEY49_fwOU_fmA_wc_7kFeAWWs4S91YByGL9yc-7IG8x8Si87yuKLK5_Kk2k6Sj8o7BHXue2buspxzemu1-rwAXOY1wpHq35b-6kYpfzN5bZ7UvDorA7njaFhiBDKBfbtzZQStpRGnBZaJuuvbekht5vZYHS-YDOSQsws_q4003__tcDZ880">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDgCa35BnJ0OHVVyYckNAhNYN4ffCK5S6YXnbfW6ZRH9JRuC8k-_Fnuytfmp7owNCoRIaVA-iReOLjSeugfExqg-Ybaian8SBv8Bj2sun2mL17zJTpUrUBNuApERJWcLyqUc2ZhXunbzZtl-6ABvTki371qn_5X3J_dOWbuN-vjj8Wm3_ba34pnPJ-Zm-KSsiGPUxnOT4aNdlzY9ZTQlbuJd0000__-iMqYf">


</details>


<details>
<summary>Response types</summary>





<img src="https://plantuml.com/plantuml/svg/~1UDgCqB4AmZ0KXU4zJt7iKaKhpb9AYmdYqa29iuGsQ2Ks9JUPn7SNGGIt_FF7vN9g2jg7-B0iJuxbEPBwqkQiv56qeckKu3X8Bb0Ku1AjL13yf1O_cdmr-LVMMqs4BCxMwQ4pDBk9J0PDkEnGbbZoZVFzRHnM6CFitTtqOVklKLLuiZMYjzY3WX-dAtknsap3Pxbt0000__zbJKPq">


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

<img src="https://plantuml.com/plantuml/svg/~1UDgCaK5Bn30GHk_v5PzxgR8kU9PbsSK4yT90YMS9pRG6qbPd4Zo8_rq44TjJtl7n60Q-isJFkKn9DTMefa4Ll-dbsTb7qvhkuep6WzK6XmEqHMiTZ7voLtzfzTNgNrMVl0Xs7OrHCd57xuKax-05BtSu7d6jRnVkNsEumIR2wOHFjGTDFYRSGpB7ULHx32Mbra_qtxrvaO-5myen3SHCOHiN8PvNxakTQGu_Gtm7003__maoOBe0">
<a href="https://plantuml.com/plantuml/svg/~1UDgCaK5B0p4GHk_v5P-zh58hdgMK5XF4omQMU9QmcTP8ThVE97WG_xi88jqzvHqVZs7WsqlsdCkGL5EDQXfKyPSUNfnzCgtf3iveF5fjiDb0MxJMmUXdT_MVLb-j_bNroOjWrT4fIYRkwAEGv1MyuFKUsoskzUt4_LiCDuZvpDCxzVbkaMEtmvTQWmOV4nuWcUDuKciSIqgj7-ZIdRt8vyHXvfYEn4nX6HSX7cVkM-rf3B-J_0G00F__EbDal000">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| email | string | |
| fullName | string | |
| password | string | |
| preferredName | string | |
| username | string | |

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
<a name=itproject.artifact></a><details>
<summary>itproject.artifact</summary>

### itproject.artifact



<img src="https://plantuml.com/plantuml/svg/~1UDgCa3yBmZ0GnVTyYcUNAhNWBAMqc20k3KYS9QHLWp6Lv9p4xow2_yRyjhlxSJnU4qa7kbqSovDXUOuatcgxKt8jEh5jbU1OIIvGbk0IdLGGVACcNpNvQt9MPfoE4PaEP0_QK0OTiL-WgZ3byp6Oa-rd-5nHrxYp0lqGJR1NigF74f62zKTMm5b__f_9aXj-YmTh1j-_odm6003__s85IrC0">
<a href="https://plantuml.com/plantuml/svg/~1UDgCaCrAn30KXVTvYcCtLMh5jPJIOeAuQK3YMa8QzMecBScTrJ3lFWpCtpBVxbu-3eSpPBQ9jviWwc94NQE8apf-6lsc9lKn6YNnggL2sq9gJDf0oNTpTr6BKukx2XTipgXiOlgsZYlOZAzdT1tkvUEIt2_D3o1Uq_Bd7J-TFVGzTgB1xBDBj38j4I_8d2Z-Y0Q1ul_jpSJ1NnzxCVWu7sSz1000__-XxKzL">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| description | string | |
| link | string | |
| title | string | |

</details>
<a name=itproject.getuserRequest></a><details>
<summary>itproject.getuserRequest</summary>

### itproject.getuserRequest



<img src="https://plantuml.com/plantuml/svg/~1UDgCaB4AmZ0OXFV_ASukLRJWBAMqc20k3PGuIsb23TIA-PD9V7SfYE2MRpm-ZkDg3hqFyJvHdWpbEPBugir5gvDiPTTeAN1KGg8e81HQfI75MQz-Qd9hybOQffuPsMX3PEix-uoMGuQUSTsZBB4MkuSVRiviyE-Wgl2YBPR86Hp0mRjvf3VLTZRBPPy0003__t0IGzC0">
<a href="https://plantuml.com/plantuml/svg/~1UDgCaC4AWa0OXE_x59CNYp8wXuZIBj751TdE8RhOXcdj_tkAtZs42BhjTnm-Xc5oujhpTEz578o8OmJnLOkpqKTLggemIkAWfKAIG6gKsa39ardyrE3MuAsYwMiYH9tbYQolx7Eon15gmcM7DCLIRaRVN5sxWkE77s-suUs_ZIp3IwmnHwx57iJU3PruYzmExNpU9m00__z9laVL">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| userid | string | |

</details>
<a name=itproject.job></a><details>
<summary>itproject.job</summary>

### itproject.job



<img src="https://plantuml.com/plantuml/svg/~1UDgCaCsAmZ0KHlTvYc-wwGoTmgo7KbfC43SDI5nBcWPDQPEIn8M8xow2-BFBMHuEbylNX2XzFCqJoPCXUOua7ccx4tpDEhPj1QDOSSfGbg0S7HTWT2E-dcdorUHVYPfa2CX6rsUG0Vi_L1M-wQ_pwcY67uokHrtZGWeeDo_Idl6F4Bsn1r9Wa5673w63ycQ9njbt7KsSz4jSIQFjS9_r5W00____M4tj">
<a href="https://plantuml.com/plantuml/svg/~1UDgCaCrAn30KHlTvYizkgjIAQocbnGHnqu34jQHfq9GsASbrCGppxiF0C3-xdENXSBbyNI8TwNzTM9aDAqjaSKxxRoK_n22-UYKutYKNg6jmYK4g2Fwf7YvfzjNiNvbPT4eevZ0Mq0a_hsWQFFBd4CsVcvxWQ8jXjePUvZ2YRR5d5KnOD-rtU4EYwFmlgp1fikbEs6IYsyW5Vwl9qMAlui0wwwVJmCS0003__sQlKUy0">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| company | string | |
| dates | string | |
| description | string | |
| title | string | |

</details>
<a name=itproject.profile></a><details>
<summary>itproject.profile</summary>

### itproject.profile



<img src="https://plantuml.com/plantuml/svg/~1UDgCaSrEmp0GXEz-Yg6NG48bpbKKjS8Muj984CwLupgmnR6BVqw8TqSefMfpyXndPhzTQTSXIX_JQ5YHBLOKoDAfkddhsYUn5I-RJd0yjbnWkGHliMqx2FxStPohsTJiMvaoCWGiZjuDPFG2Cc3tWBh6BRztNdtG_Wwd44s3RrP1-aY3L35WXR9yrLz9MwLH__jDMR8AFJci4A8d-yugw56IkJI6PCpEob5VcWVNpwa7rqz0G_Pp7aw3Ktua5PE_mgMW_VMA7xRMTl_tqDy0003__tpJTD00">
<a href="https://plantuml.com/plantuml/svg/~1UDgCai5kip0GXEz-YlcvvAzJeYJ7A8eI5LJr4gIMdf4nJcjgR6gRGrNbtQk8a9AeIEoDsM7cqyfRvvdrJQN8PFIGoGIZvcpTlQR9OxoFdtTf7E4XYMA48Q84-oH573sb_oxMqQcZMGbNp3a4p7fvODox0CmXcsEznl_etbZ-BeixI5zRKmhkPvqHcms-oHI5SDpAsakZiOBpLketCeMI-gF_xQLNubSuThsboS-LYy7AqkHT6pTLpVHNFxbWNhWhuM-Y8OBQceDKeeLO3aASRHt8vLvOWT8NyTa8pGNMdRwXb4oHIzD741MJgYyS6gKopIhH5qydkKajJTu6divwksn_RFUrvBwnLt6D4_QwuaYo9MWO8fZFPZH0DhyL5cGhT75wzZy1003__wn3qDm0">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| artifacts | sequence of artifact | |
| bio | string | |
| email | string | |
| full_name | string | |
| jobs | sequence of job | |
| links | sequence of STRING | |
| picture | string | |
| username | string | |

</details>
<a name=itproject.searchRequest></a><details>
<summary>itproject.searchRequest</summary>

### itproject.searchRequest



<img src="https://plantuml.com/plantuml/svg/~1UDgCqB4AmZ0Gnl7zdkApInGjE4ifBIQ8ImCbpXBIO0jjnLmwYUykWWXk-Sy_ZkEhEDeGbsaaaHm9WQI-jBuOVLADQckZ98vQAkGvf4QZ3PGyczMF9bzD_fNSQ9cHiRV1zQr_B9vZ1ikuxb4KMClTFRX-w3Ru8oXBF6cBwCE40pY6ORxHYoe_Tv-vtW400F__Hof1xG00">
<a href="https://plantuml.com/plantuml/svg/~1UDgCq3shmZ0Knl4zd-AvNNelrugpbD9YWhWqKE8i8GssqXVDEPt4xow226xvppyEXwSaje6NSH1fT29D4TMRLaUZzwfMJMMKn4vBXIo3rAYrWP87y_EXqLUZVnLki4H8oDlWkiRV5a-Sm19E6-GvVkLg3gxhsp_qV0tpnJjUVs4K1UxY7-p3Y2s8Gp-TnKEKVcfVmpq3003__mzsHUy0">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| term | string | |

</details>
<a name=itproject.searchResponse></a><details>
<summary>itproject.searchResponse</summary>

### itproject.searchResponse



<img src="https://plantuml.com/plantuml/svg/~1UDgCaC5gX30OXEzvYgaNsxH2pqL4QKBfnO2cvnBYJnNIsERNqxBllYmi2zxodRyPXcbvSsdRVuCein5bYInkQlTbpOVkzT1PhV1kb4PLGHdqnaAhJ_jmLxDRixSA7nmp2YQN_3mG_wsHgO1ZVB-Yhl6eNjRavsLwmj51q-0adf68zx0ntY3bIFyxHK-eUOa_WSP3ef5Id4LBSReUUWa00F__-75E7W00">
<a href="https://plantuml.com/plantuml/svg/~1UDgCai5Bmp0OnU_vAvwzJ3DRkkiePSCMyRB2LiybPfzR94jhlkGa-zz5tCI2Gh_Zu_VUBuUiE2WVuicAsUGJinactGLTFxVDOxsfj-kshl3GL3NI55M3JTEYhfxQcnzqykhajmfj5JCI9kNrSKiyz8ufWM9qEOe2jzLzx_NHxEzWmk3xDz8X6zCeIto8EJnnj86nX9GxUe_aDA5WumwMTgD6AQKuNzMNshTpyR_pZvsh-SNqM8A3D-uWvdYDrdPEdUXtE1WTeXz5aScFiRFeSiWqHP9dcKpGBSIAtFxh0tm6003__v4MXpi0">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| results | sequence of singleSearchResponse | |

</details>
<a name=itproject.singleSearchResponse></a><details>
<summary>itproject.singleSearchResponse</summary>

### itproject.singleSearchResponse



<img src="https://plantuml.com/plantuml/svg/~1UDgCq35BnJ0K1U0zl-BubYhF1yvIIei9uj90ZNE9QMm3QLfoaqdyxoA8M7X3pdZuk5nEIqd7b5VFgkAmga9HVcdtfkIpwCNGAS7n9Bd0vG8kqKi5mL_KpHyjlbhyApDU4-54BipUlbeTpJ9OshT0zWHD61zGrxZbzriqYvlkS4sYQV39pdXt6nv1ARemipC-ilTZqAlzN-xEf1mFLIORZ-oBjJPCFxj_1m00__yClrj0">
<a href="https://plantuml.com/plantuml/svg/~1UDgCaK5B0p4GHk_v5P-zh58hdgMK5XF4ImCrdalCZhkHRB9aafFutqKGSQ67lEFZpJ0mUousbpe5qJKZkWvD_AQ7LwEVr56T3aP9F6gfiDb0QXorWPBFvkelRTxQVAjmmJ9ZnJuEWLx8PZUUYESKcLQmZFCzjbjSozkKtUZx6_Wov_H1hjnTci5kXq-nnfjFU02NxECWrdYl8PoZdUY_dBqhDIzKPShBx4liAVO_7_WE003___bVNq80">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| bio | string | |
| full_name | string | |
| picture | string | |
| username | string | |

</details>
<a name=itproject.updateuserResponse></a><details>
<summary>itproject.updateuserResponse</summary>

### itproject.updateuserResponse



<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNb1Qa99QabXQd5WMb5XVavnMdAYaa5Yl46zZOA6YuwEGN9MTafcWgsDafL7FLSZcavgM0GWSG003__rbSFJO0">
<a href="https://plantuml.com/plantuml/svg/~1UDgCaB4AmZ0KHVTynRLB5Qpu0QMqc20k3PGuIsWVMAbDo4icyTz54EUS-N2vd9QZ3J4z5r5c8yeIMVpKxchqMVLgw8oIE6cfK5MG6hqsKF9YDdyrUpNxgnWNounYZZwu1utnaFna8oMcC11xjp8Li8pRiQwnbNiNnliyxT0qU8ctQ6cTlda-0G00__-EjJra">Full Diagram</a>

</details>
<a name=itproject.uploadRequest></a><details>
<summary>itproject.uploadRequest</summary>

### itproject.uploadRequest



<img src="https://plantuml.com/plantuml/svg/~1UDgCq47BWa0Gnl7xVehdzU8R9dGM4QLTeeiBifrZqwK4NSiP3n5zzmWYwBR_yuzXU4fYE_Co3Y8EJiGnWlhGwc3qJjMggOoIs6gfaAQG6hKsK79l_huq-6hmhw8TB16YvJfCjclSRN744IpXk46Uur-kfxczzDqAFmH5WOT8q4wUdMTaEDtPaKZWxUYGWNZk_LayHUbyznxm5G00__yi2qVb">
<a href="https://plantuml.com/plantuml/svg/~1UDgCq45hWp0Onl5xFiKpBsuunyuYeYnXx690ilF8OcWjcjZazL1Altifb49l-Pz_lBmyRIGTQ5jcbYV7yXn9tMdtg-ItwCNGAS7n9Rb0MO9Bz591y1_ryg39LvD_PMRMCIBRrjdhSR37pKRAe2F-Fb7NUENlFfZzDBvXeZNuWpNqyOJHD3Yp0iOxievGuVz4Dh82JYyM5IA5oUtOXRNMZRSfhm400F__FH5Bvm00">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| content | bytes | |
| name | string | |

</details>
<a name=itproject.uploadResponse></a><details>
<summary>itproject.uploadResponse</summary>

### itproject.uploadResponse



<img src="https://plantuml.com/plantuml/svg/~1UDgCqB4AmZ0Gnl7zdkApInKjE4ifBIQ8ImCbpXBQeeNOb5moYUykWWXk-Sy_ZkEhEHWVuiDIdXpbEPBwqkQYrKcsickq53Wg8L4K40gjqf3Yh5S_cdmr-LVghM565XVhpD2DlBYPnmo6STsZBB4ME-Vx-pHiy6zGLNZI5j5R7C31J_EDNbIFy_3Pwnq00F__c6z2SW00">
<a href="https://plantuml.com/plantuml/svg/~1UDgCqB4AmZ0KXU4zJt7iKaKhpb9AYmdYqa29iuGsQ2Ks9JUPn7SNGGIt_FF7vN9g2jg7-B0iJuxbEPBwqkQiv56qeckKu3X8Bb0Ku1AjL13yf1O_cdmr-LVMMqs4BCxMwQ4pDBk9J0PDkEnGbbZoZVFzRHnM6CFitTtqOVklKLLuiZMYjzY3WX-dAtknsap3Pxbt0000__zbJKPq">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| url | string | |

</details>







<div class="footer">
