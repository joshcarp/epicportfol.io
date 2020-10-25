


# itproject
## Integration Diagram
<img src="https://plantuml.com/plantuml/svg/~1UDgCZasBsp0GXk_pAwQdd0pvS48F8UJ3RkabXkBIWob6jIUHDh9aHcDsbsN_-n8KVCZ9SthHyxoZcKqUcCrmqZpKmv-o-9cVyz-7Ci_mL6Gv9Wbc1PwB4lFiL_bjL2TldNmhx8Cebg6p84OieP6U_Gir0jgqX468oSjxJn0QPGaxzOQBpUfxYfhCLGk4ct6zOjLXuxlUEtA27u1uLCtjodvmxSbRp_Z3UbRshpP2T-gv9OxaQ5Lp0yG3it-DJoSsNV0EFg4QUkjL-mzLm7gEswqsLstlF-zsKAaGI4A42wZdc2IxUwhK89gSc4O9HRnyxhR_8rX1lOoz5LGz-uknz5YPFdNgT1G3AMvqrDRFsdhKBkoTa7lSlu5w4z5oJEinfR0drmwT_Ge00F__AswZSW00">




## Application Index

| Application Name | Method |
|----|----|
| authenticate | [login](#authenticate-login) |
| authenticate | [register](#authenticate-register) |
| authenticate | [registerFirebase](#authenticate-registerFirebase) |
| authenticate | [verify](#authenticate-verify) |
| echo | [echo](#echo-echo) |
| profiles | [getuser](#profiles-getuser) |
| profiles | [updateuser](#profiles-updateuser) |
| search | [search](#search-search) |
| upload | [upload](#upload-upload) |

## Type Index

| Application Name | Type Name |
|----|----|
| itproject | [account](#itproject.account) | 
| itproject | [artifact](#itproject.artifact) | 
| itproject | [echoRequest](#itproject.echoRequest) | 
| itproject | [echoResponse](#itproject.echoResponse) | 
| itproject | [empty](#itproject.empty) | 
| itproject | [getuserRequest](#itproject.getuserRequest) | 
| itproject | [job](#itproject.job) | 
| itproject | [loginRequest](#itproject.loginRequest) | 
| itproject | [loginResponse](#itproject.loginResponse) | 
| itproject | [profile](#itproject.profile) | 
| itproject | [registerRequest](#itproject.registerRequest) | 
| itproject | [registerResponse](#itproject.registerResponse) | 
| itproject | [searchRequest](#itproject.searchRequest) | 
| itproject | [searchResponse](#itproject.searchResponse) | 
| itproject | [updateuserResponse](#itproject.updateuserResponse) | 
| itproject | [uploadRequest](#itproject.uploadRequest) | 
| itproject | [uploadResponse](#itproject.uploadResponse) | 
| itproject | [verifyRequest](#itproject.verifyRequest) | 
| itproject | [verifyResponse](#itproject.verifyResponse) | 



# Applications




## Application authenticate


- authenticate is the miroservice that handles authentication and issues JWTs to 
use with other services 






### <a name=authenticate-login></a>authenticate login
Login is used to login and to acquire a jwt 

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCa35Fmp0GHdV_YeykNJ2uI2nLuhOY4MAWaKgOEaHESYg6rAvifqByUfGqG0Q6tEZtz7ow-UHXypacpQ1kNlFiCTsckqsU9dZ8aXIS8ycmpNAaoLD-zQjEhaxUbQrzK2wqnuPLrWHd6ynK6zx815sfG3CeZqAmMWLLAa-OrUNbRS7yXpOdvTGHH_NvJDwh0xteByBTlM11XuOmJY7YQEn16nR7_mF4CTjpMGWi1rDLGPyxfH2i4E0IFIoLrzMueQrXA0INnG9BE0fEqvdGUd8CVv559qMSzzO5rZJ6-mvsFqILRQn3sRGaTJWv-qvLkEcNsf4_MUCfkkqTYMYG3ux8oDKrLZz8id5Ui3MPkZlrTm000F__10sSvW00">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNwENafsVc1QKMbgOMboWf91Ohn1lOs2XekEZa5oLdPAPeAjZPALHprN8vfEQbW0864000__y4tJhL">


</details>


<details>
<summary>Response types</summary>




LoginRequest is the response object from Login that is used in bearer authentic
ation in the header: "Bearer <JWT>" 

<img src="https://plantuml.com/plantuml/svg/~1UDgCqB4AmZ0KXU4zJt7iKaKhpb9AYmdYqa29ivGsr9IQbDo8W_Zk8eZWbd_-k5nEIQ7ruNwRM1eTIrD4zQNLMScZg4LJAS5na5mWoy0bQgaW-4ajVZJwQlIlh9jQ8YIJ6unjDCtEaaxG4Yuxv3cMVEDyTpNz2YRCtesw2zi_ZAB0awqnFWBseE2D7TYBbThsdztU0G00___C-4MU">


</details>


---


### <a name=authenticate-register></a>authenticate register
Register is used to register a user and acquire a jwt 

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCq45B-q0G1V3xV8htxwMN_seYU2d9jiK4yM03DPvw2DjagAlffknEHFpqqjhQWWYPuywFzvOP3nuQZp5eZdJ-N1Rt-I9VpiiymrsHvL0AMO55KIBF7if_FtHmwk2_qYo8yT9lMwex9xvhCJAzlB0JMnlX4Kn05L5ZnAnDO8oQzVTRJE7DkftnPekj-NZa4Co6d-mdu-Os8h7ICYwZa2XutjWWx2bD_zmXJMcbT1LXSlQc5lk-XrL4g2AbgnWJM1VO2_h0dd0cCQ6AeJH-euOlsIfHwj2Jr5tRUQpRdhMLdUzUkPQhK_kImwvpWPFh0zD8ZdxZcPsU_iVqjD9qsH3HZ5spF-vN0000__-F3vd1">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDgCaK5B0p4GHk_v5P-zh58hdgMK5XF4oowKzInXCwsHR7QTcU11_EyYYBYUyewFnp3mxKKzQncJQQenJOCgVjB3KzyzkDOT3xspkE-imsO3sw7jUZZxs5_yfjLNgtyrG_8YMCKy5rt12vvliTtYqbvFFBp4S8MeCq-lDEWDqpcA4X_fhP0eTZjyc3Lez37X3g8SyzciSIefjNwalsxs8kyJXuLZEX4pXVzn4UAyS9zcJpby3_4L003__m7NODu0">


</details>


<details>
<summary>Response types</summary>




RegisterResponse is the response from the registration services 

<img src="https://plantuml.com/plantuml/svg/~1UDgCqC4AWa0Gnl7xFiMN5uioEeU8qYxHnGNPpY6ws8gfx4nqYDuzWkZGQV_d7yFmvSIrv_jj475m8euHr9SMPwEFgbHLOPJ4GKk5987KABM1aYUp-D7Wgy6_YcQeYH1vspbYwojBypIIZL0JBZkaAPPoC_dcwjeL7Cz-wct3st-FBCDJhD4_67iGUpTsuYLoExQVzTu1003__vtLI3O0">


</details>


---


### <a name=authenticate-registerFirebase></a>authenticate registerFirebase
Register is used to register a user and acquire a jwt 

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCa35Fmp0GXNV_YgDB5WmH4WjAt5R480OQ2SBK8Rgwfs1mxCY-8E3NerO5LM9etlg-x-bqsUI8B8D9EQ3BbwQ-rolzj6nq1RTrfK5Ag6fOrGtewg4v-qCdhqw-LImIO-InTy84pp4ucE78h-JP6cIQ0IPeSv7UhHymOWyzVZvIIjZHi_qckBhE1Ljs1CSQ518YTJOnnJiRQOE9H5cUPA0inLggDeUR_puQjXyxiSt5kf1oJnKck11XuqPIbeSOtiZm1VK3VnMN-qv1SO2wIEJL_1pclvKIMpgUNP3Vxdxn4m00__z36e7k">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNwANc5fHKAYaa5Yl46zZOA6YuwEGN9MTafcWgsDafL7FLSZcavgM0GWGG003__rF4E080">


</details>


<details>
<summary>Response types</summary>





<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNwANc5fHKAYaa5Yl46zZOA6YuwEGN9MTafcWgsDafL7FLSZcavgM0GWGG003__rF4E080">


</details>


---


### <a name=authenticate-verify></a>authenticate verify
verifyUser is used to verify if a user has permissions to edit an profile; used
 for frontend rendering 

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCZp5Fmp0GXNV_YaUNB1WY91QKfAr8X1Xef1Ac3f5nZs9mxCY-LC2lHoqjwb8fR_s-ztINZ8v84epAGPs_DFL3jQYMywOgSL-N5QH4MMDHDwZAn-RYNnszElfMCOki0W-T5Tex3jvYeWP-9yT6AwO9L4IRYlXfNA-2wj2fhoUAKMtesVmGRcvJmOOjuRI6J69BmRnzYpm_Gv3dOYMBDiNTqLMQpNOdjQbOPLBkMQQzzG6lTg32S1_y1sc--ciiAVRUHSgkzrA1x61l0f4hffUO7b4XrdIwFoEtthtz6m00__yVv7dG">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDgCa3qBmZ00HFVyYhDB5QquIoaj9eXB0oNE4jgeaJQj-H14_EyYY7FU_3YELpelhGz3Jz9eI9eYYfzQ7GNViverbM0KEquPiWoKe-O2Z1x4xAz6hqP_9MqldKEYpHHy0kbmsY3FCQUhqRPNtIsW_MJ7cshz-g6iFZyRTG_AUHG5NcI9u9GrSb3OmdchpOMyIQbCzuts2G00___QfqI7">


</details>


<details>
<summary>Response types</summary>





<img src="https://plantuml.com/plantuml/svg/~1UDgCa37BmZ0OXFVyYlkwz1EjE4ifBIQ8ImCbpbBRY97ObBnH4F6_YoA2MvxnU3YEAocqFbpEbgNHi3H551-rsYgv5hLeAYKuLf8BP1cuH2qL1D-elwyQtHgzbNMs9K9orTuSRescqGsa4xI4tG9vZdy-Sxuxcdu24qRlJheByryRHO4xc-AT6jrZYRrpbZrOgOV-TTup003__qR8HwG0">


</details>


---




## Application echo


- EchoService is a basic service to test connections 






### <a name=echo-echo></a>echo echo
echo is a method to test service deployments 

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCZq5Bn30GXU_v5S-zz6Aq25uapUvYWtXm2sizxM69sM6Dfab9iYB-UccjehU-op2yZu-POdPOKM1M9dJzr3PtQgEswrRLk6rg1SvHDzWqBLHztvxzehEjiszbgvHrpAVECHDyZi5XGUObBA0JzYLBRzRtEkeEdVvue9JqaHxj9-7gkcJPPaSOS0W-JbPL_tPK5TjnkIznyzrha-sxpZIuTuBpiH4ck13nx4uaRUvZU2MJBmP-IwaFFf6u7149CR77IEJbyXpBdqgo0_srhyWVXhU-0W00__-kSMlO">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDgCaB_AmZ0SHVSynVswz1EjE4ifBIQ8ImCbpXBIq4Rwp_pIINnt4SGvPpvSBgUae7rOnu6bqR0qHHHVjRegUHQrQ2ebE4wI2sGPk4Gj5GI_gB-V6hqQ_PMPGHCXSTEoXWIQS3iWp_7FTxCtlMitS67nyzsQiBUcdnlxM2q550MUR8lH4kdEuWWAtaqTUx7IJksds3i00F___SH35W00">


</details>


<details>
<summary>Response types</summary>




EchoResponse is the response from the EchoService 

<img src="https://plantuml.com/plantuml/svg/~1UDgCq44BWZ0Onl7xFiMJ5uioEeU8qaPqSI3h76CEDTJ9tdMAldi44HttF_zuUNbA2jg7npIoD3gMfeZgIwkhacTHYwPIWkCakK2MWKlKKa7mYrhzQFJLw5-P6JKH4cjwrrXQt4msWIRS3iXphFdEUTCFxGP3MBoxMnFs_nP5WIVROh94khCuWe8VvewzM6ddzhFSEm00__zBf4Ow">


</details>


---







## Application profiles


- profiles is a service to retrieve and update a profile that is displayed 






### <a name=profiles-getuser></a>profiles getuser
getuser gets a user from a userid 

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
updateuser updates a profile 

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


- search is a service that is used to find a profile/user based on a search param
eter 






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





<img src="https://plantuml.com/plantuml/svg/~1UDgCayzkip0GnEz-Ylsuv2ifKVxSeYXAL53LIv1IUaR6R1fJOrFR7AegxruX80LK97nZlCpC_YGVZANQbhaWiyc7p6OmwJIZnxSeV0vEmVaO1JuyXNu0dWT-2ASmWi1_YVxTHoUxJkvAcA36W4ErvHVAh7606eYNiDl1V_zHQNRbwGDmMsYL8REBTX3sU_WcSqZHCCqBovM4BHYhkNmdSn1SVdI_BRS2VuLRcvkff8bSZKPcAcdJcCeBAh-wpYcrQ7h2tut66cWqfMZtNe-MABIwS85jaJils8Bhlk9dYP8Xx5fzxxfa3WbNtGgOKowwmgKK8fOqnwvO8HcuPYgf3Ikimylwn_g-uCoMkcTN6jJzYFlg1gbcrpEQGac3DO7DA87-T0kYmJVerD2gIjr8l0RNyy1PBXQk0_5oAAn8lEa9Qt90cLQlxYS00F__NnFusm00">


</details>


---




## Application upload


- upload service is used to upload static assets to gcs 






### <a name=upload-upload></a>upload upload
upload uploads a static asset to gcp and returns a url 

<details>
<summary>Sequence Diagram</summary>

<img src="https://plantuml.com/plantuml/svg/~1UDgCaC5FWp0KX-_zAtxkiejLCF5YeDiYn7Xm91DFEv0tU5dGGabRZF6lDmXpIxpmJitxldnjkfmzOhd4h9dKpLkUFQNRTBV9qmIFMP92IYGPjbcED7dEh_xKsTNPRnLhvydwlj6YDAstHcFHTzfGjG0v586eoDE176D1ph5tupuKxgDkExBKeA6l5tQEZlnQVpFkxWFXQwyPOmYHd4uYZl_j4CTYBrKHuE5aKUdhJ_8yt8uYaAe8pn1d6WuqadB4LWjKV4dt0nkwKMcqiJZedbNjEslUkVGtOt37hZEju-ZsLrA89ljecLkrkiRgX9Iux0TYpMqrVDnF0000__yBRejw">

</details>


<details>
<summary>Request types</summary>




<img src="https://plantuml.com/plantuml/svg/~1UDgCa36hmZ0OHVVyYlkwz3sU5MSffSK4SMcWn5b24pGIsvfycSJ_Be8uvyo7o-MqaNIWTFEip8QL9RBugDrHoRtenT0fmR6JNA2gm2LwgI3uGVryrUpLxAziz3f656vQ4XNG4QSDwXg_V3M7yUBC7nmjORxQaTPfyRCsWxqd6mbDWmVxXz6aK_3O8b9mqvazMMidysxs2W00__-GMqG4">


</details>


<details>
<summary>Response types</summary>





<img src="https://plantuml.com/plantuml/svg/~1UDgCqB4AmZ0KXU4zJt7iKaKhpb9AYmdYqa29iuGsQ2Ks9JUPn7SNGGIt_FF7vN9g2jg7-B0iJuxbEPBwqkQiv56qeckKu3X8Bb0Ku1AjL13yf1O_cdmr-LVMMqs4BCxMwQ4pDBk9J0PDkEnGbbZoZVFzRHnM6CFitTtqOVklKLLuiZMYjzY3WX-dAtknsap3Pxbt0000__zbJKPq">


</details>


---


# Types







<a name=itproject.account></a><details>
<summary>itproject.account</summary>

### itproject.account



<img src="https://plantuml.com/plantuml/svg/~1UDgCaK5Bn30GXU_v5S-zL5aNFCkoj9WWNXgGU2v34hMGfZAJua7yxo8KQJtbtRwPZs7WjLA8op8brLH7DGsgighTYxEFfZVFdJCQ3rORd4xG5hrrCFh9NVsfrLUhVrK-aGWEvFsyv7802OOxdC-urhSp-_Snt61TudB1bpeYJZGct4CAZ_bD7P5fYbl-897FcSDknl4rCiSm_BU5Kjdo8f7tphTgOmw_BVm4003__o2pNZu0">
<a href="https://plantuml.com/plantuml/svg/~1UDgCqK5B0p4G1U1xViMpbrLgnREKqcA2UEc2hESo9AD6iacPoU91_EyY5Edsb7TxmySmC5kj97KQa-cQOxeEJJdHtUlGFxczUzaDpkAnjmwh5MoFVJ_0sUVXwfysRss-rVX4gbYGzsNATG5I7EwnNkFQtXRn7p7S8DQZb4_szUx4iDdWsop18yM41sYLcD_D4fb6Fkz7Klqg4cOpuJSMuN2ur4gfdlT9MURcnsmvXxz__0O00F__HLHYG000">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| email | string | |
| name | string | |
| password | string | |
| preferred_name | string | |
| salt | string | |
| username | string | |

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
<a name=itproject.echoRequest></a><details>
<summary>itproject.echoRequest</summary>

### itproject.echoRequest


- EchoRequest is the request object for EchoService 

<img src="https://plantuml.com/plantuml/svg/~1UDgCq4qBWa0Gnl7xV8edBnObT0uHfLsYYmkodMFHGGLVo5bFqNUF8ABZ_iy_Xk79nRl5h-D0SN0KnmZgIukRDHTTwggmMk5ib4QIG1cKnaAhgztyQF3Lu5-f7fm88gwxkUB7ok8ZEC7zY3J5LXtcfUxwPeS_W2p3a_OOMSIrZ1F4B_tKqejodfhFMky0003___AiGMm0">
<a href="https://plantuml.com/plantuml/svg/~1UDgCq4sBmZ0Gnl5xFiMplNINtIwUfPGM4yHB0oMU9QH3M-cBPjAJ-Dr54F6O__d7C3mb1-l3EeqYZKwaAQ9wqUfez5xLggcCajXfgP1ba1grDb3oOBxUDFfgzA_2ZPOP2Rb-QUYw4eS4bd7Q8C_nBVyMx_gX_S4GBduvaml_7nH5WPlunKJCjYDimS4FSoVkegIvVUxs2000__-sb4Lk">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| message | string | |

</details>
<a name=itproject.echoResponse></a><details>
<summary>itproject.echoResponse</summary>

### itproject.echoResponse


- EchoResponse is the response from the EchoService 

<img src="https://plantuml.com/plantuml/svg/~1UDgCqBsgma0GnV5-dkBSDBcY0Mi98S5Tn2OBOQrbIOOaa0_PMIlntKKGiTn__MCOJYd1-N2V9qgZepH5L1zQNQmvwLetbTKAHwCqiWpAe3OMMftjtvT6Nut-bTh9YI3XTbWRbjkw22TmWkiUUOv_jLjzEupT1hy2HO47RJ6pYEiP1qZmuzBJaqfUklTUhm000F__Vxv2E000">
<a href="https://plantuml.com/plantuml/svg/~1UDgCq44BWZ0Onl7xFiMJ5uioEeU8qaPqSI3h76CEDTJ9tdMAldi44HttF_zuUNbA2jg7npIoD3gMfeZgIwkhacTHYwPIWkCakK2MWKlKKa7mYrhzQFJLw5-P6JKH4cjwrrXQt4msWIRS3iXphFdEUTCFxGP3MBoxMnFs_nP5WIVROh94khCuWe8VvewzM6ddzhFSEm00__zBf4Ow">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| message | string | |

</details>
<a name=itproject.empty></a><details>
<summary>itproject.empty</summary>

### itproject.empty



<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNfEOMb5GgAIGMAyGRsDWeQBZev1SbPsIcQ2hOsIbKSzLoEQJcfO0211000F__8C4tr000">
<a href="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNwANc5fHKAYaa5Yl46zZOA6YuwEGN9MTafcWgsDafL7FLSZcavgM0GWGG003__rF4E080">Full Diagram</a>

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
<a name=itproject.loginRequest></a><details>
<summary>itproject.loginRequest</summary>

### itproject.loginRequest


- LoginRequest is empty because the Bas64(username:password) is contained in the 
header of the request 

<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNvEIdP-O5fHQMfXQNA2aa5Yl46zZOA6YuwEGN9MTafcWgsDafL7FLSZcavgM0mWKG003__z29EgS0">
<a href="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiePPOK5ELdfIQNwENafsVc1QKMbgOMboWf91Ohn1lOs2XekEZa5oLdPAPeAjZPALHprN8vfEQbW0864000__y4tJhL">Full Diagram</a>

</details>
<a name=itproject.loginResponse></a><details>
<summary>itproject.loginResponse</summary>

### itproject.loginResponse


- LoginRequest is the response object from Login that is used in bearer authentic
ation in the header: "Bearer <JWT>" 

<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oievUIdP-O5fHONvESLfoef91Ohn1iesDWeQBZev1SbPsIcQ2gWA56mirEevj9Mo2elKR1IA2ufoinBvwhbSaZDIm655Y000F__26D1d000">
<a href="https://plantuml.com/plantuml/svg/~1UDgCqB4AmZ0KXU4zJt7iKaKhpb9AYmdYqa29ivGsr9IQbDo8W_Zk8eZWbd_-k5nEIQ7ruNwRM1eTIrD4zQNLMScZg4LJAS5na5mWoy0bQgaW-4ajVZJwQlIlh9jQ8YIJ6unjDCtEaaxG4Yuxv3cMVEDyTpNz2YRCtesw2zi_ZAB0awqnFWBseE2D7TYBbThsdztU0G00___C-4MU">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| jwt | string | |

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
<a name=itproject.registerRequest></a><details>
<summary>itproject.registerRequest</summary>

### itproject.registerRequest


- RegisterRequest contains all the information to register the user in the databa
se 

<img src="https://plantuml.com/plantuml/svg/~1UDgCaK5Bn30GHk_v5PzxgR8kU9PbsSK4yT90YMS9pRG6qbPd4Zo8_rq44TjJtl7n60Q-isJFkKn9DTMefa4Ll-dbsTb7qvhkuep6WzK6XmEqHMiTZ7voLtzfzTNgNrMVl0XsJ6EKJDpHUo79EtZ1onsEHrphsuNxrnXki8bmEk5JxK6JZmdtaCnn7jKUGqcfzHFzTszUv6FXi79C0p5JsCP5YEUL-r9dciFF4Dy1003__oyIOFe0">
<a href="https://plantuml.com/plantuml/svg/~1UDgCaKzB0p4GH-_v53zxMQLMF4ifBIQ8bmsKU9QmcTP8zeyp2Hx4xow2I7TFUSV7OnZuxILxpgLFggb6DGsg-4iFByu-cTOS3yveF5fjiDb0MxJMmUXdT_MVLb-j_bLroOjWnNIEaecFz558yWfUy7gFxHRN-dRaxYs66yGyyVXENRvRvDZjyANMeDx7X0T8vZYSrHgdabBhUxfqanVv73dC7DE9c2aiuoB4mynzgpqDuNUIdm000F__ONDa_000">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| email | string | |
| fullName | string | |
| password | string | |
| preferredName | string | |
| username | string | |

</details>
<a name=itproject.registerResponse></a><details>
<summary>itproject.registerResponse</summary>

### itproject.registerResponse


- RegisterResponse is the response from the registration services 

<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oie5QMcPnQNf1O5fHONvESLfoef91Ohn1iesDWeQBZev1SbPsIcQ2gWgrAmirEevj9Mo2elKR1IA2ufoinBvwhbSaZDIm656I000F__m3D4D000">
<a href="https://plantuml.com/plantuml/svg/~1UDgCqC4AWa0Gnl7xFiMN5uioEeU8qYxHnGNPpY6ws8gfx4nqYDuzWkZGQV_d7yFmvSIrv_jj475m8euHr9SMPwEFgbHLOPJ4GKk5987KABM1aYUp-D7Wgy6_YcQeYH1vspbYwojBypIIZL0JBZkaAPPoC_dcwjeL7Cz-wct3st-FBCDJhD4_67iGUpTsuYLoExQVzTu1003__vtLI3O0">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| jwt | string | |

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



<img src="https://plantuml.com/plantuml/svg/~1UDgCqB5gmp0Gnl5TJ_7LYrkrXix569jAb2uMECeSX7p11iLsTFOKykuX40BPz9z_7CTNy-hYkfs2o9CJUOwa7hJPM_EdMzqrLYly6gLH5506hR7Gwj--FMdorUHVXG-E6HcJYtxeY9TvOihW68Tlb2NUrTSS_J3s7tWrg2fSn2SYyHPMnW-atD5veyaJoYNEnp5G9QMuYfgc_hxXBG00__yBs4Ze">
<a href="https://plantuml.com/plantuml/svg/~1UDgCayzkip0GnEz-Ylsuv2ifKVxSeYXAL53LIv1IUaR6R1fJOrFR7AegxruX80LK97nZlCpC_YGVZANQbhaWiyc7p6OmwJIZnxSeV0vEmVaO1JuyXNu0dWT-2ASmWi1_YVxTHoUxJkvAcA36W4ErvHVAh7606eYNiDl1V_zHQNRbwGDmMsYL8REBTX3sU_WcSqZHCCqBovM4BHYhkNmdSn1SVdI_BRS2VuLRcvkff8bSZKPcAcdJcCeBAh-wpYcrQ7h2tut66cWqfMZtNe-MABIwS85jaJils8Bhlk9dYP8Xx5fzxxfa3WbNtGgOKowwmgKK8fOqnwvO8HcuPYgf3Ikimylwn_g-uCoMkcTN6jJzYFlg1gbcrpEQGac3DO7DA87-T0kYmJVerD2gIjr8l0RNyy1PBXQk0_5oAAn8lEa9Qt90cLQlxYS00F__NnFusm00">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| results | sequence of profile | |

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



<img src="https://plantuml.com/plantuml/svg/~1UDgCqB4AmZ0Gnl4zJ_7PfOeMdAMK5XF4fO4IPpcQeeNOQYwPn7SNGGIt_ESVn_7L7CY7U7CYJqxaEPBwqkPaz46rgckCajXhgL0Ka1gjDb3oQ1O_cdmr-LVHEs965kzk9jiDZpXmo42CynPbYQNSpBw_ZdQ5FuAgmbEiOIbGz0uxSF3ZT14lKG-J_Ips3W00__yRXqD0">
<a href="https://plantuml.com/plantuml/svg/~1UDgCqB6gmZ0Knl4zJ_7TBhsY5MSffSK4SMcWn5b24xGIsvgSJEAxYo22M_xpZyFXgmDfJ_7cM9uSotCazQ7DKSczQ4NNAC6naroWAC0bMgaW-47zVMdorUHVMUzq2CZYx2PjEdkFDb067N3Qe2pnprUJxo-3MM2WsKzNszFw1wEgy61B64qwUeSj0lbXFBCdg-retjkz0W00___mO4T2">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| dataurl | string | |

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
<a name=itproject.verifyRequest></a><details>
<summary>itproject.verifyRequest</summary>

### itproject.verifyRequest



<img src="https://plantuml.com/plantuml/svg/~1UDgCqB4AmZ0Gnl4zJ_7PfOeMdAMK5XF4fO4IPmdjgOMsOYuHH7nt4KHmot_-SHnVoTuw7yP1fD69D4LKNreTZDwfMZMLKH9RBHMo35AZrWPAxitiHwElHlygsi4o8xcJwq-FXcw1s2UmZECQUOwvN5rTU-cx1Vu8YW9FiKHWSfCT2HkmT_rq5YzHqjHz9di7003__sdZGzC0">
<a href="https://plantuml.com/plantuml/svg/~1UDgCqBqAmZ0KnV4zJt7iKaKhpb9AYmdYqa29iuGsQgGVcfiA8hwx22AuvJ__k5nEJbuxFtOjYuDZSOoWlhJOAxaLfQWA9JWsaWia2RX4AHK4twd9ZmPV3VwLrQqcGdGtpXuVbRcDXdm4JJYiaAQOyiNWwhDjPh3-weQBgVto3oFBy6HpZ6HShpk3DSWxsv_OY-McRpxZlGC00F__Gsr7rG00">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| username | string | |

</details>
<a name=itproject.verifyResponse></a><details>
<summary>itproject.verifyResponse</summary>

### itproject.verifyResponse



<img src="https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiebQKMPQPL1gKM5-Jd5QSgAIGMAyGRADZOA6YuwEGN9MTafcWgeAfHiBDJgERIXeXcfgOeM2aavUVdSDLoEQJcfO2231000F__RKH3eW00">
<a href="https://plantuml.com/plantuml/svg/~1UDgCa37BmZ0OXFVyYlkwz1EjE4ifBIQ8ImCbpbBRY97ObBnH4F6_YoA2MvxnU3YEAocqFbpEbgNHi3H551-rsYgv5hLeAYKuLf8BP1cuH2qL1D-elwyQtHgzbNMs9K9orTuSRescqGsa4xI4tG9vZdy-Sxuxcdu24qRlJheByryRHO4xc-AT6jrZYRrpbZrOgOV-TTup003__qR8HwG0">Full Diagram</a>


#### Fields


| Field name | Type | Description |
|----|----|----|
| verified | bool | |

</details>







<div class="footer">
