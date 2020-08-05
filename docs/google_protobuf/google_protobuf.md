


# google_protobuf
## Integration Diagram
![](https://plantuml.com/plantuml/svg/~1UDgCZZ5Bn40GHllv5P_LLLU88fQNIrQnkO14B6LDncJ9xawOdQ0Y_dUH4-kySjvZ-7QReTqEc_XBgwUklNSdzrXrha7TDWxxFPeMfxQ3QnwwY_zqyzVDM-bGpAkjAP85YunHP8pyigYOlAvlD8M1KOoLnJuNfjBxo4Z-0vStLxVNc3YCar6PGrwy-eHUqYAPi-6BWAFlvr5bpKCjKHHtKTJ7voaO_rhHWVLiZj7tCm6LghoVJxM6L2JJDnqu3skAFm400F__SyzVcW00)




## Application Index



<span style="color:grey">No Applications Defined</span>

## Type Index

| Application Name | Type Name | Source Location |
|----|----|----|
| google_protobuf | [DescriptorProto](#google_protobuf.DescriptorProto) | []()|
| google_protobuf | [DescriptorProto_ExtensionRange](#google_protobuf.DescriptorProto_ExtensionRange) | []()|
| google_protobuf | [DescriptorProto_ReservedRange](#google_protobuf.DescriptorProto_ReservedRange) | []()|
| google_protobuf | [EnumDescriptorProto](#google_protobuf.EnumDescriptorProto) | []()|
| google_protobuf | [EnumDescriptorProto_EnumReservedRange](#google_protobuf.EnumDescriptorProto_EnumReservedRange) | []()|
| google_protobuf | [EnumOptions](#google_protobuf.EnumOptions) | []()|
| google_protobuf | [EnumValueDescriptorProto](#google_protobuf.EnumValueDescriptorProto) | []()|
| google_protobuf | [EnumValueOptions](#google_protobuf.EnumValueOptions) | []()|
| google_protobuf | [ExtensionRangeOptions](#google_protobuf.ExtensionRangeOptions) | []()|
| google_protobuf | [FieldDescriptorProto](#google_protobuf.FieldDescriptorProto) | []()|
| google_protobuf | [FieldDescriptorProto_Label](#google_protobuf.FieldDescriptorProto_Label) | []()|
| google_protobuf | [FieldDescriptorProto_Type](#google_protobuf.FieldDescriptorProto_Type) | []()|
| google_protobuf | [FieldOptions](#google_protobuf.FieldOptions) | []()|
| google_protobuf | [FieldOptions_CType](#google_protobuf.FieldOptions_CType) | []()|
| google_protobuf | [FieldOptions_JSType](#google_protobuf.FieldOptions_JSType) | []()|
| google_protobuf | [FileDescriptorProto](#google_protobuf.FileDescriptorProto) | []()|
| google_protobuf | [FileDescriptorSet](#google_protobuf.FileDescriptorSet) | []()|
| google_protobuf | [FileOptions](#google_protobuf.FileOptions) | []()|
| google_protobuf | [FileOptions_OptimizeMode](#google_protobuf.FileOptions_OptimizeMode) | []()|
| google_protobuf | [GeneratedCodeInfo](#google_protobuf.GeneratedCodeInfo) | []()|
| google_protobuf | [GeneratedCodeInfo_Annotation](#google_protobuf.GeneratedCodeInfo_Annotation) | []()|
| google_protobuf | [MessageOptions](#google_protobuf.MessageOptions) | []()|
| google_protobuf | [MethodDescriptorProto](#google_protobuf.MethodDescriptorProto) | []()|
| google_protobuf | [MethodOptions](#google_protobuf.MethodOptions) | []()|
| google_protobuf | [MethodOptions_IdempotencyLevel](#google_protobuf.MethodOptions_IdempotencyLevel) | []()|
| google_protobuf | [OneofDescriptorProto](#google_protobuf.OneofDescriptorProto) | []()|
| google_protobuf | [OneofOptions](#google_protobuf.OneofOptions) | []()|
| google_protobuf | [ServiceDescriptorProto](#google_protobuf.ServiceDescriptorProto) | []()|
| google_protobuf | [ServiceOptions](#google_protobuf.ServiceOptions) | []()|
| google_protobuf | [SourceCodeInfo](#google_protobuf.SourceCodeInfo) | []()|
| google_protobuf | [SourceCodeInfo_Location](#google_protobuf.SourceCodeInfo_Location) | []()|
| google_protobuf | [UninterpretedOption](#google_protobuf.UninterpretedOption) | []()|
| google_protobuf | [UninterpretedOption_NamePart](#google_protobuf.UninterpretedOption_NamePart) | []()|




# Types



<a name=google_protobuf.DescriptorProto></a><details>
<summary>google_protobuf.DescriptorProto</summary>
### google_protobuf.DescriptorProto

- Describes a message type.

![](https://plantuml.com/plantuml/svg/~1UDgCaa5Fyp0CXk_z5VvwsKUXqxYYgTf40-B0WaOvHr7ZZKXjCk8KWH3_7MKR4qGLYc-jd-UrQtL1NZe_z5qsIQviCe6aEgBBfuRViXLRBnjMmpMl6PGbr1nMl05MtpN_JcXoQlAkMTj98iXhfDRfdRVkmLblSv04OWRpEVolBwnhdxKwWmY2geAFx1pG3Btmxpk4AoYAHtmPqBG8SsQ6FbAgeWZ2cqT3sff8kD7OgRyDuQJPneCYHR1lUXtWGy8cP2VFCx8FGyWxRRRX6ScZ6ll8KTqQj1kXiEqYceV6kBBpsXhQy_T89BV83w_sROU4xXMLE6xsC_ImPVMRIxdJ-WYVplIPYHaKPGdvR3ejSX2NsGAD2l__Lm000F__IHlVp000)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgqLqrlupOGlUjNiBwaTHh3ZcCdAO9W5sktQD76YwotLuAMnYvt9L8bgNoqw7ylA4gKI36s37Xzyt1ctkERuP1w9nKHgiZIwAptBpexGxr-bUlxp-lLByk7vUFxzNA1FgmMItHnWHOhzB1Qe-NYr_LtrhLtrjvSepWbKgB10cGiQAwu-2YuuWD49C9ZT7U7lb_yo4Ny5qr-G3lETodWN7jiYkt82qBtz-ZVw1m1ApAiNdD0Fw7Xy1FyNG2B0TqjMP5v8VV3eGvuKS0avSmB-9b2ckoFm8AmdG_aXU1bxVsedKs6hSxT6u-HJ8D89IZRwVyW5IIXJGR3EGE-nGd4gUUzqWlXa5nHpcJf_mT8INQmCgPoMO04yGG9hfYrangMzwvV7vqUAsShqtzrUtXwc_QO7jSUNXcQRj5be4nvctQzstilpsGLOncw6pK4huyawEm_n2-8RDlTW4uEW0PEGGtbTvaZ1okoapT0W0lMjauZdACdaXQXy3-rFT31UmjpUxn6NLwz2rJ9QA1lUa1NEjS094tvCoOf9ReK6yxJw1mba0k8YOAaiHMCCWKY5w27Wu7r9FlSTZ4uZbgbp5KZzUcaaFnljHChiWs8y66hKpKj5fPlSjcNb2VYDzBB8JS_n2qqKcg29o1ZfwIXSqYgq7NJoBKbHQfmVUni4KkC11pR5yaPzgkTaWsOwoQ4Wt_No-6xpMkJykwYB86NOEkKsTkJoLwAGTprQmxMpIDjXUoZbDb1-TYeMdFgobqgULnAJQwTSROletikhleKsskvs9MgMiKVh4QXG_D5XgD--sJ3KlBFQnEGa_ZhQKxTENe6yhNEj5zQPpDjJUT7LydTOJlNTU_wp0wKntrYxHjQ6SanC2LQ2cSc64jG-9aAm5ikCg8Q1yQnL8GbH2GuiJs7IHo3b5oSTYBQjwRP-Q7633r1-pn8ohY3ryLD7_JJJ-9GYehHeO-QG6hx4DZj1Eo8WkvOJdYnIHlxDkL43qgQ05DqIq5qGm8Fjm0sVY0PV2H2LHyY6fy-0QQikHpCKCwvf6yi6KnhtBmga8rOcaWbpktnubY2jKfKulO7NNq4I0OuDwypE-xn60qlBj1WF1eD1mYFVSF4DrmUD4nzmvKrJ4QZ2HeWF8lmnBNSHBel7EJRI3_07A_9PQJVFuxREDAZ_osJZPm7RDUHFXv-wANdDUsQhhgcMOIdhcaUOH_m9iAp3jwyO-bmUWSiAR8q-Zy00F__WfzkHG00)

#### Fields

| Field name | Type | Description |
|----|----|----|
| enum_type | sequence of EnumDescriptorProto | |
| extension | sequence of FieldDescriptorProto | |
| extension_range | sequence of DescriptorProto_ExtensionRange | |
| field | sequence of FieldDescriptorProto | |
| name | string | |
| nested_type | sequence of DescriptorProto | |
| oneof_decl | sequence of OneofDescriptorProto | |
| options | MessageOptions | |
| reserved_name | sequence of STRING | |
| reserved_range | sequence of DescriptorProto_ReservedRange | |

</details>
<a name=google_protobuf.DescriptorProto_ExtensionRange></a><details>
<summary>google_protobuf.DescriptorProto_ExtensionRange</summary>
### google_protobuf.DescriptorProto_ExtensionRange


![](https://plantuml.com/plantuml/svg/~1UDgCaJ5hmp0GXNVzYbSlRkKQEXjZR2fHkbZ5gBCHjcW5ZcGa1G8X_pqaCO4iGM-zxpkEUss8oiVzRY5vSaYU8oaRslrAySLxFdIICtmAnb6MO0AzaE3iMxxSqUIjoRUIQL4X86CwJDwiqVaVxw8R-I5g6uopWx9_EeCA63zGrtXbxyvF_sP-mtC7JOCZAQ3jZ0h6HbB0hT4u6r21qaTQt2QKaWBNds_EYRJQpfS2pW400F__-JrVEm00)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKaq6Fcp0GXU_-5LCkQKr18NkB8hHHGLKl8Kh9sN9WGYqHczecQbNblrV4G1erRLWVn_FUV7u3hyPoRTjJJMQJ3vdDODBfMzVxFFkSRjBTEayJ-9GbAGG191biiXpIv4l-RcoTx3gPbHGrDmQy14sXHMELtcfb5Kj_M9H6ABdZia8Fk04sXzKAtYSVbIw-YV83L4fLDRAc4npQO_X_3uXZ-4LyG5d24eIqn0VLMA6aWILGUj-TkHjAYG_N7VIQom3SInrPz8JieVS0r4eXBUf6eyMIETyhqLVytg8i45RxFrkSFARq1lF8mf4jdf0zS1wuU5LfhBX5TkPrYx04OxMG5V6XLEsXljMFjU9TdA94QSLHeFvR8la9dx-ARVW9jrpR-9gyxEQBCp8XxMZfLjSe8_vnvMQEnSDFY-QMLGVYidbvUpOZtn2IC0o7vNQpbAhxnxB6VJLz0XV2va230Bme32FmW4M4HQuo3qFg0LiGjhWhl91Nb6Ntz_yE003__pIgDhq0)

#### Fields

| Field name | Type | Description |
|----|----|----|
| end | int | Exclusive.
|
| options | ExtensionRangeOptions | |
| start | int | Inclusive.
|

</details>
<a name=google_protobuf.DescriptorProto_ReservedRange></a><details>
<summary>google_protobuf.DescriptorProto_ReservedRange</summary>
### google_protobuf.DescriptorProto_ReservedRange

- Range of reserved tag numbers. Reserved tag numbers may not be used by
 fields or extension ranges in the same message. Reserved ranges may
 not overlap.

![](https://plantuml.com/plantuml/svg/~1UDgCa46BmZ0GHk_v5T_sqbsw1SzIIei9ugMH4iybD8CMQY99z2B-Tr6AHycx3RmPXjU4g7sydcUM9yFo74aiQdjGSYiwqRTAS6ma5oXBS8bEAWY-KpyVDVbgygzid7K8o3Y5qK-NwFpUk-Y6dWBv6vbUsoDbq0732bM5N_xl_7YQp1--hg2kSMS5o1giCTd82hnRBjE3DMJDA-mp003___GlKIW0)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCaC5gX30KHVVvYbitjbXBrqL4QKBfnXH9rvAQLolOH9BOJPb_7nnabaFkxi7Xy3XDYDh7xNTXUV9OdYDf1zf-AlacEj6tId2yIYvGbk0IdLGG_5tTNT5aQ_AlR5nq2CWuXT7FQtJ-mxleXfu2-JyolROJPT01mpEg2lVyqVdnPpOFc9oR5XhMdV_QlfzkAb3N-6S5o1gyOBQH5RYqFQuJQyYQFVGv003__upULwC0)

#### Fields

| Field name | Type | Description |
|----|----|----|
| end | int | Exclusive.
|
| start | int | Inclusive.
|

</details>
<a name=google_protobuf.EnumDescriptorProto></a><details>
<summary>google_protobuf.EnumDescriptorProto</summary>
### google_protobuf.EnumDescriptorProto

- Describes an enum type.

![](https://plantuml.com/plantuml/svg/~1UDgCaJ5hmp0GHdVzYgzPtCeDT0x695IYT8cBwtOrmZvIWosb9pbBwNylmgQGuC6twNZlSQ2z3uR3EFGYMJqYIR1gPlJmKHKl-gZBGwKLdWkbiTr25JWM5RHwhUx-qTNLrRUAfZVUOwFjE2Zo3NVduFYDNN0R68_w2Lc6U_NekFdgsWSiWCXp_8WKrWo47NpWpfv42dSEdRCUEqWPjM9wIobIC7dY2xNrB4dvJjyZsOQGJO7yccDZJxVWmYrrt9MpL4PdwbnCFoxfdt5_quZ6hzYJRUF7_mK00F__Ijg86000)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgqbK6FsZ0GXU_-5LCkjA4WACiU44AxQgAg5rXHjbVBIORKacEdjaDRLVlVA-CaDDcicZqqjmppvZrzCn5tnZ9joroGyU27ZCSmwAbQxn-F-q_HBZhS7wCGFkx32APJ2FUmsnyX2ZyVtpIjWwSEpaeImOo1KIJBF4IJQ5vOfH-qice4p02TmsO3RyFtIYVVUFeECgKoWRHm7N5vclK8ORk5tsG2akK8Qp1MSvcH2QZ2SYKDh248d6pltuE0J42ZGNt6b5QY8FY2tqkK2SB63zYs-pIJMRUn9mjrjKCbEZYDdtDcekoJVtNrpWodUAf1jGDuHXzUp-XvhfeQoXJMmAKb4xXSN_NM9AWmUkl50EkASst0X50_A1ESkLN4IWaoWHGBZGcpc5vhfUJIeYuqMaofj-qWU_oxnVkqQ5qm-wGt0vBsqN_fccIPnwWRLDtZkeowNbW_lTNGJ1s4_ubMtmWVTFcFe3sJctLdcSQCMQJrpJS8KrN6ube_2SKSIfwYjFp4KJ-Nz7oUFTvqnt9yODhwZqqwVtv6ogLjHlgr5Shm5txodaqn_cNHN5cv89xDxUlPDFbgIDnG_6bH6h-qQgNEWnR-4wm8F14wXs0wXT5YDbl02EY2q8Mlp6UpO0HqIUYoLRWbzAQjMH6wwcZkKARkV-PF0000___tNmDm)

#### Fields

| Field name | Type | Description |
|----|----|----|
| name | string | |
| options | EnumOptions | |
| reserved_name | sequence of STRING | |
| reserved_range | sequence of EnumDescriptorProto_EnumReservedRange | |
| value | sequence of EnumValueDescriptorProto | |

</details>
<a name=google_protobuf.EnumDescriptorProto_EnumReservedRange></a><details>
<summary>google_protobuf.EnumDescriptorProto_EnumReservedRange</summary>
### google_protobuf.EnumDescriptorProto_EnumReservedRange

- Range of reserved numeric values. Reserved values may not be used by
 entries in the same enum. Reserved ranges may not overlap.
 Note that this is distinct from DescriptorProto.ReservedRange in that it
 is inclusive such that it can appropriately represent the entire int32
 domain.

![](https://plantuml.com/plantuml/svg/~1UDgCa34BmZ0GXVVyYcUNAhNWBAMqc20kZPGubz04BRI99AcB-D-bKfppjZk-EnvVvODqOPv6aaQ7f2cYigBrJV0pQrXR2qPnufGXpq4v6Yx0w4Li_cZqr-Ykf1-bzqYOcIUgVU-6Px3kwcomtR9hjTVkfLKhpLqda1xT0KM1BTrRrpy6jKFKASeIRv916uKZ1XD8Xf_RTVgGIXkrYFu6003__vJFLtm0)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCaC5gXJ0GHVVvYbitjbXBrqL4QKBfnXH9rvAQgHKqaIHsK_hl3n_orhcx6UuSXjE4g7tSruNboM5vZgISrVPJoJVHYRvLWkDLSe6o19Vef8BWx-hkLasc9l_AnaM7W4pOVUKKHZzlqVaFxw8RZbrFWVmlcLxRYJBeWE4PLOLx_kZy-3ER1qpEJGiDst7pjNy_9Q5Gr_XZ1SWQl62saHMukZwdVzQGDOVuIm000F__a_PTzm00)

#### Fields

| Field name | Type | Description |
|----|----|----|
| end | int | Inclusive.
|
| start | int | Inclusive.
|

</details>
<a name=google_protobuf.EnumOptions></a><details>
<summary>google_protobuf.EnumOptions</summary>
### google_protobuf.EnumOptions


![](https://plantuml.com/plantuml/svg/~1UDgCq4zB0p4G1V1xFiMpbzNKWkUoB2qcY9S6D3qlCHama2Ph_k11_ExY7soFUSVXnvjXTgMQNDifiA4xR1ZGbJ-wFshr80_oQQ-bmBqI4fiDXC91QKZngA_-QNThzwtC1bCALZAsarggJx6iO0hcEumZhiLjolRLknjS04mJFjWQ9eJqFflWJS4MBoa5jeQZ9PCrbTnvrgAFbVAIgPARqqyBjk3ycTuQHKiOZvVaTy_4EVjaEuhk-_zV0G00__-V7LvF)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKKqzFmZ0SlVTJ_Dm5tHm1ZeGGY5kC5sPqd9jk-p6RTEriEzGOlhkfWu4Hm-pnxVNzQxOmbcdRL88CUXyo642liwSkrsbo7w_YfsKQHt2NH3648KG9h98KukWXlUgelLLxPoMvOCQ05ykcIchBbJGUC0Dq1BCPN4UtIkSllBY1KgbI8AsriYfhDiEJ2p2VmoS9W0cXtYWJd1cOGgQK804KM6lCcSNYY3MIIukwrcYneEfR1QRW-y_usg3C4MRhKqhhC_TziZlaFIVH1XzV27v6kIjGbXfBPf5kcMWGfc2ivh9qDLIJYIE-4OfP4W0lK5g-uQX_Nv6imikjw8fL-CYqTVK2aCwVRv5oQJj9BfrNhGp_urFhsO7PXqLptCe5QRUP_7-RBjzX96uelbkKfdsq_PCw3rexMhV0Zj0H-648tcWuz3sWOqB7Fu09MQ0itD_r5G00___huW3Q)

#### Fields

| Field name | Type | Description |
|----|----|----|
| allow_alias | bool | Set this option to true to allow mapping different tag names to the same
 value.
|
| deprecated | bool | Is this enum deprecated?
 Depending on the target platform, this can emit Deprecated annotations
 for the enum, or it will be completely ignored; in the very least, this
 is a formalization for deprecating enums.
|
| uninterpreted_option | sequence of UninterpretedOption | |

</details>
<a name=google_protobuf.EnumValueDescriptorProto></a><details>
<summary>google_protobuf.EnumValueDescriptorProto</summary>
### google_protobuf.EnumValueDescriptorProto

- Describes a value within an enum.

![](https://plantuml.com/plantuml/svg/~1UDgCaBzAnZ0KH_SynSykrTI2SocbnGHnQKIYgyGsQA19IlvCuhjByQFR1pdRlHmEbpl6f4BATYDrCQIkKSH5dTwaUE8pVvqaPtWKZADjmGHc8S7PixmvrU9gyQrasLICgBZBzbrjMJCTbs3svCDByCbNK14V3-XxtB9x7vPlizxXcerXm0zfu9JLw11JCExhcBFzr04TZ4kaWT-JyIwY0wLdIlmlAIM_PDHkFPx-5m00__ybh5f6)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKb46Fqp0GXU_-5OzS2YcDckwjggfTaGXnQLRGvMevoJHOIknWEoiGsl-EZDDi4Rjgy2sJvpVVl95yQvqmRkXQjfXzs6A1MMUKtZqSYu_v8VzyTympV2Yo7AiLiWA7ueWy-tHyCqbdkyvcPLKhh4MKgw7xAjg1ChALaRtJvjvefoC82xx6ReUtsNjjgc-oVeT6wwObtdj5EPoIrsvZlySljeGI7M4BwunKZVyUkf8Cjf3AiILqxwHM5bl4yMHLX68SiwSpvAWBJEbSfj7ep59JRwWIZcfiKMhTiYK69PKZqnjoLFFGvW_D5_e-aAe8kuTBIR3SNxAzP150DrT0Nt0-iugcCTG8H_pHJt8POQs7idskdrejV9Io9kNaIPBvzyguXIjJyOFew5uOvyTRGld-yf6uL6wo36lhjPMl_0ezfsBvqv5zpig3X6nk_Z-RYUySahISVZXIDYnjNAdlmNilcn9uOdoDUBL2b2P9YWWyPJmDbNMIn17uXl7DNuKRTakgzW_0xm000F__rJesF000)

#### Fields

| Field name | Type | Description |
|----|----|----|
| name | string | |
| number | int | |
| options | EnumValueOptions | |

</details>
<a name=google_protobuf.EnumValueOptions></a><details>
<summary>google_protobuf.EnumValueOptions</summary>
### google_protobuf.EnumValueOptions


![](https://plantuml.com/plantuml/svg/~1UDgCqCrAn30K1U1zdk8ucsh60TT3AJEO86uQqDHjYSa52sbIyxCItrtyGSHLplgxXyivvM9IgQjdNNDOrw4fF_GyQNKdH_bmrbBWLWc9mm52OLGQKjphYr_QtDhyAxFUv8oT37LzChwIsieIGzx1PCmtw7jSYkkOxClYhl1VOHZmnlPmj2Moff334SynUhP73KiebBP4XTmSlmvm1EUFz5efM48__INVbGFdx9sTABZFqJy2003__mTUMqO0)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKKyrkep0GllifPhba5vOeoJ6AeaGBMkqbh5hIgsLWGYs1JUqXQbNbtIkNXFGdLQYFmpVVtuYL9M6ehIis6lpOQ0I3tX6wtgR9ttWJtwpJE88_IHH364AKm2P98Ox-fJzww63MmLvPNWbhmOjLMz-9giMa8QcLzK1Ou1DOBE1dz5kR_5uMlw3KkgoGDqQJpjhT-ECMB9Vmp08ei36O2y82vf1fNR40MYKLeMaC4XPSlox077p_5XzQL3d2OliMqb4kVPyTJYOlKNH6frUCNc0-UHLbQR0KX7plai0SB1cfIXT3jrbrdkygBOW580jK97SIpUSL9MgydeflH8t_XI4NBm3bzEKUkLJKKqhbj1fjvHUVEir-c3qHsdDNpaZNpUpxtVJ-JYL9o_6HKDdkQCUJEWtUE5ZVm87n2VXX2DvaFFOzu5F6f-y6CxP2LRXVwYK00F__aQlzmW00)

#### Fields

| Field name | Type | Description |
|----|----|----|
| deprecated | bool | Is this enum value deprecated?
 Depending on the target platform, this can emit Deprecated annotations
 for the enum value, or it will be completely ignored; in the very least,
 this is a formalization for deprecating enum values.
|
| uninterpreted_option | sequence of UninterpretedOption | |

</details>
<a name=google_protobuf.ExtensionRangeOptions></a><details>
<summary>google_protobuf.ExtensionRangeOptions</summary>
### google_protobuf.ExtensionRangeOptions


![](https://plantuml.com/plantuml/svg/~1UDgCqBzBnp0G1V0zVyNpkrIZ1MSffSK4SMcWfdC9xQ61Ugb92eBului_40U7lFK-TnolIzd5V3nleYgEg2eKvOVsapLtUj1ZRxN2hL4QTGrbC1WBhUxjsIyjlbhygrWsbn9E-ZKJ9nzuTFn8Piy-S3h19SpNQ1gSgwiGboU_Nk1VYhR5cxZ4mPupnJrIfdKENqFSGCe7UZc85q8p_INVwwsKubrqnEjdrHy1003___w2MEe0)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKKy5kuZ0GlVihPdDXDzaWu8WG0csYLI-aek5i6JAabi8ujIUeLSM_Lsb8Q5KgqZdEl7dlpREySAmiLuT237gN60oWLvsXoqsQ_8zNyNgPnX7yIw8OmX2Y15P92d5qb_xgeBrPUtiLkq8v1rxyp4XE6rehoZ4fMHjo7YW7SWIp6VoE_XgxUzJP7yYDoGkKfJLijjL-U7KLvdDu5G5Kf8dHbXOPCsdUXp05tt_0fmffXp3RV8GqwtFV5wVMsZMAnjduXhChpAqlbUSMSyKeZwge4ARWs6hAHG2PgRR5fRylZ68HWCwGMEyrsgyhf0vu-ogvKWUyLvRhymAWMbyVKMhYZb9JhLKQfxyPDPfTS_l2w2vPrKQQR2O_pwRpruQadSJsSMijOuhpiRAiOLq29o57u8SXUAFXqFT0ZeKSVsfCn08fgp_IMm000F__1kNxPW00)

#### Fields

| Field name | Type | Description |
|----|----|----|
| uninterpreted_option | sequence of UninterpretedOption | |

</details>
<a name=google_protobuf.FieldDescriptorProto></a><details>
<summary>google_protobuf.FieldDescriptorProto</summary>
### google_protobuf.FieldDescriptorProto

- Describes a field within a message.

![](https://plantuml.com/plantuml/svg/~1UDgCab5Bmp0KXT_pAuvxcROEV2vZR9WgWgmYzJbapPr6qgGajx8X_dUPoiR6XDx7Br_EFGztdbX7xbidneD7ZCSOD7_gugMkxijb-RoeIudRIfQOJ20hBAiQfNoeB_RguDJ1NKNZT4eOtLboHb9gekqunASOE8oW4zGDfbDSokiGcpThhd3En6o6Jv73q5htZjM7TZsXGE9e_Ql8GHicR-Y8lQVWbTVj4NHwHGu5ikpS7lMuUyuoaUFqe-_R5KKKi9v5Zk0fh9NrXZO7rh4DFXtIgr_mayVRZlxVMsyxscidfR_4dBpPtSXt0000___sD9J9)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKbTzlsZ0Gnz_pLznuwHO60jfI2I7Kgc7JfWcgbJvRJdnaNesTsKvNDkr_dnA7_2YK1Xw_lllUtUViS6qirJRT2E-izSyxEuDMloBqvc6r_3nVpB_VhEO1t2w3EVHw42nXiLp1FFYoUbU6jdPjtQiN2MeCT3vn52n04scUMANljBAg0zG06S1q2k-3Zqf7FpZx0B5IiK2IP15XkkuVoeJP3FvwNM2ufgcmv8cA5642ncekOwyB-6nHCcneFusIHD9DGnGqH04JyFr3TSYtxDZtlIwyJ9Jf9aGD4-3IUbrG4jMQSCdmkT8IovKqbVlI2RcVtIRuUjtLDi4ox4NJ_tPCsv1o4m3ATEDm3vkqSv2dEMQzrGpFZnaM25pagCsc2qQx3KTDJiKfkIq1CKmqHjGYWmc4IebyquUpljwNQOB-sLO92OqUwmQfvDAYJZHQPCGDaTlTuwyKPOGmVQY7k0AptFatqiUTqt6mZM5gH2zENb5pm9hLvJ6hGrEwjF4Rcpem_6vXD8urnjJY_gDaAWr5fQ-5ejapuGobvMkEUZ-bkFblW2SBki4xggtRWCpgyoSaN5QV1lSa4sNuAqUkPYc6MukcOfKrujXSdSwcx6y7YHkIVw6CkrV5hSjga2GBgxrrCW2_ruFEiDyVGWV8S4yPxIdd7XarbOizvR9K1ls-tm4oziYu8LnvroXPzj_qFm00___8zmgE)

#### Fields

| Field name | Type | Description |
|----|----|----|
| default_value | string | For numeric types, contains the original text representation of the value.
 For booleans, "true" or "false".
 For strings, contains the default text contents (not escaped in any way).
 For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
 TODO(kenton):  Base-64 encode?
|
| extendee | string | For extensions, this is the name of the type being extended.  It is
 resolved in the same manner as type_name.
|
| json_name | string | JSON name of this field. The value is set by protocol compiler. If the
 user has set a "json_name" option on this field, that option's value
 will be used. Otherwise, it's deduced from the field's name by converting
 it to camelCase.
|
| label | FieldDescriptorProto_Label | |
| name | string | |
| number | int | |
| oneof_index | int | If set, gives the index of a oneof in the containing type's oneof_decl
 list.  This field is a member of that oneof.
|
| options | FieldOptions | |
| type | FieldDescriptorProto_Type | If type_name is set, this need not be set.  If both this and type_name
 are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
|
| type_name | string | For message and enum types, this is the name of the type.  If the name
 starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
 rules are used to find the type (i.e. first the nested types within this
 message are searched, then within the parent, on up to the root
 namespace).
|

</details>
<a name=google_protobuf.FieldDescriptorProto_Label></a><details>
<summary>google_protobuf.FieldDescriptorProto_Label</summary>
### google_protobuf.FieldDescriptorProto_Label


![](https://plantuml.com/plantuml/svg/~1UDgCaB4AmZ0KHVTynRLB5Ipu0QMq-A88qeZ4kSGcO21j94adyTz54EUS-N2vd3Oc5T8oELPcmyeIMVpKxYR5aVVysabEs0lYg2gGG2yaE9tawgzchsP_PQDJCQ8uMECqcJW6-qm-N89FVZYhkt4myp8LK173hgwnfgqFuyFg3Pe6B_PchPdrjz0d003__pPFFVm0)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCa4sgmZ00XFSvnRnk-WGh7g2K5XD5a4OahalQnbf8cvAVbNXtAOZhVClXOnYcT5vQ7oPDqcX8cYAAhrhT1J-ncjqgmIWEd39a6IX7pGKOFOk_dnhT6hsLT5ewXsGmPj2gMQpnfWsFtN5KkgVATNPSlB7NDMykibKQQWvJ0kdGxFCS_tHhRFSS-msA0Y_o9gMQ-_MnJm000F__cvH4Tm00)

</details>
<a name=google_protobuf.FieldDescriptorProto_Type></a><details>
<summary>google_protobuf.FieldDescriptorProto_Type</summary>
### google_protobuf.FieldDescriptorProto_Type


![](https://plantuml.com/plantuml/svg/~1UDgCaB4AmZ0KHVTynRLB5Ipu0QMq-AAuD29nBYK964YRagI3YFykWZZdp8VBvRGnZI6jasDbDgmiaSLFxUvId7dFRvtaXACWZge22VH2WjD5RlvgzchsLwRS62EAapLEauags2NvS0q--K4-5mCphrE1CM8ur3MsjFT1FQpUeMdmOc_Mcbb_0tq2003___hTFRu0)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCa44BWZ0SnU_x52yl5cJq0KIKjgABYrXdCLqcJF-opKD4tps4wBpVyV7ZyNYvyxNrys1O70oBOmJnKukRaYTHYckX1CT1Se4a0PSefOBWPxNwgy6jmLjPOshd47L4dT7LPCdJVNxiZhqsBTUkiVtaoLwMl5AlIKEFyn2XTgZsQOertv9jddsxGPRXpJuirsEx7FOD003__rcsH3a0)

</details>
<a name=google_protobuf.FieldOptions></a><details>
<summary>google_protobuf.FieldOptions</summary>
### google_protobuf.FieldOptions


![](https://plantuml.com/plantuml/svg/~1UDgCaK5Bmp0SH-_v53ztgROEF8zIDjOgUbZ0PUSIapzO5vEOf4WLlxjOTVRWeRzhtdi9P1sJ3Ab_DYoRFPPbcBKVT7CG_ARPDVSRqTJOyhh1SecQOyS5clfMd9tGsTNPRsNAo1YnkEx8QEvJvsnSG4QqLoXBdDUNBgZ7JbzWIg2gyCuAg3HumWfvFZrjjsBmbEUiW2OVICb46YiyE6TOWQVultMtFsb6lWr_WfVgE0tqjhE9WW-KIBTkrCVSdbvwiefG7gR8zmNLM7ubUVmjVR0rMVtrkPy1003__r2hUry0)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKb55lqp0Gnz_zAOwy558QjUkUfghQj0G43mrYsRFb9jTWvjh6lWmAsdT7gTSqqyeM_7Y-___kVcVvqfDmr6mL6mq-R3I2GUSnzUgso3zcg-phLP6bS9sd6KmcaEQmoWl8qa_5covriElWNbcfXFSGVP2egjoIDDf783pmAImMy3PzRrpvJLRle3QcLiYjCsJMpIRfAs2vX3zi32NjBC85n77_bbyNEujnpCPGeNLO2i8ABc1jZ69Z-EvFgpxVT38bVk-E0YlAkxv1ewKcTDOXOSNDNhwtky4V3UeION7RJma5bdlddoZk3auF1nWlZHg60TJDDd2QFSMq9p7CAGpOipfxoUhKb44sVsLJ9uO_B4pKjSDQ4F9xePfs2PwSr7MxAjEirJ6-KKOG6uEiK9FSI7JF9LfiyNNmV2Ms-4Ku2XlGRNrvZrngwYobRcjPu-K_haBDBhZU4VeZgxQHmERy_zbq_HqWIS_n5w7suLqzlhgs1hTjMaVWWV4fn9C9HBCacK44VFOiSjP5faaIHy3dZC-V1CxP9Ugg_NF-1W00__z975Rc)

#### Fields

| Field name | Type | Description |
|----|----|----|
| ctype | FieldOptions_CType | The ctype option instructs the C++ code generator to use a different
 representation of the field than it normally would.  See the specific
 options below.  This option is not yet implemented in the open source
 release -- sorry, we'll try to include it in a future version!
|
| deprecated | bool | Is this field deprecated?
 Depending on the target platform, this can emit Deprecated annotations
 for accessors, or it will be completely ignored; in the very least, this
 is a formalization for deprecating fields.
|
| jstype | FieldOptions_JSType | The jstype option determines the JavaScript type used for values of the
 field.  The option is permitted only for 64 bit integral and fixed types
 (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
 is represented as JavaScript string, which avoids loss of precision that
 can happen when a large value is converted to a floating point JavaScript.
 Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
 use the JavaScript "number" type.  The behavior of the default option
 JS_NORMAL is implementation dependent.
 This option is an enum to permit additional types to be added, e.g.
 goog.math.Integer.
|
| lazy | bool | Should this field be parsed lazily?  Lazy applies only to message-type
 fields.  It means that when the outer message is initially parsed, the
 inner message's contents will not be parsed but instead stored in encoded
 form.  The inner message will actually be parsed when it is first accessed.
 This is only a hint.  Implementations are free to choose whether to use
 eager or lazy parsing regardless of the value of this option.  However,
 setting this option true suggests that the protocol author believes that
 using lazy parsing on this field is worth the additional bookkeeping
 overhead typically needed to implement it.
 This option does not affect the public interface of any generated code;
 all method signatures remain the same.  Furthermore, thread-safety of the
 interface is not affected by this option; const methods remain safe to
 call from multiple threads concurrently, while non-const methods continue
 to require exclusive access.
 Note that implementations may choose not to check required fields within
 a lazy sub-message.  That is, calling IsInitialized() on the outer message
 may return true even if the inner message has missing required fields.
 This is necessary because otherwise the inner message would have to be
 parsed in order to perform the check, defeating the purpose of lazy
 parsing.  An implementation which chooses not to check required fields
 must be consistent about it.  That is, for any particular sub-message, the
 implementation must either *always* check its required fields, or *never*
 check its required fields, regardless of whether or not the message has
 been parsed.
|
| packed | bool | The packed option can be enabled for repeated primitive fields to enable
 a more efficient representation on the wire. Rather than repeatedly
 writing the tag and type for each element, the entire array is encoded as
 a single length-delimited blob. In proto3, only explicit setting it to
 false will avoid using packed encoding.
|
| uninterpreted_option | sequence of UninterpretedOption | |
| weak | bool | For Google-internal migration only. Do not use.
|

</details>
<a name=google_protobuf.FieldOptions_CType></a><details>
<summary>google_protobuf.FieldOptions_CType</summary>
### google_protobuf.FieldOptions_CType


![](https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiekMMcvgJu5vHavkSLnpk7L1QaAgJcbUOgAIGMAyGRsDWeQBZev1SbPsIcQ2hOsIbKSzLoEQJcfO121X000F__AxywkW00)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCaC_AWa0SHVVp5FTpunTaz00YYZD56mTYMelfPCBeJ-RF8g9tZo1QpraVBfTJEjzP7sR3qcXOcYAAhrfTb3oAHfmh9JXgoGMo35oYaGg2dzJVJurUZVxAUjCvXsGa6erkLqkUhk6sEqpQ37Br4oskhTLZrT1Bc1Dq3kq-p_7FjsJx-pHiK1HuiXShzJ9yIhq3003__rqiGJK0)

</details>
<a name=google_protobuf.FieldOptions_JSType></a><details>
<summary>google_protobuf.FieldOptions_JSType</summary>
### google_protobuf.FieldOptions_JSType


![](https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiekMMcvgJu5vHavkSLnti5XrGMf2gavfNcAYaa5Yl46zZOA6YuwEGN9MTafcWgsDafL7FLSZcavgM0WWOG003__sa7EnG0)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCa44BWZ0OXk_x5MzUBCZe1uWeRKKT7DGwY-aoOVg9smuH_VS8elEUyyFBovDRLy_E3uR5mR0uHX0_jRWgUH2bE1TASEma5qWIS8bIAWX-L8k_6hmQ_9KrfhOMKKVK6LrDCpcw-VjctslJoidrDDhgT57FIKEFVeXGMrJRDCMIhsbk7dsxGfRXnTuirsFxJVK9003__w3lGOy0)

</details>
<a name=google_protobuf.FileDescriptorProto></a><details>
<summary>google_protobuf.FileDescriptorProto</summary>
### google_protobuf.FileDescriptorProto

- Describes a complete .proto file.

![](https://plantuml.com/plantuml/svg/~1UDgCaa5Fya0GXk_xA-RZmcUHnBCX14ABuKADr7EpxWwuePsfErk56F-xWHAZJOsTsqwUT-QPP6SIj0zrMQXXxrB38VIg2pf_pDAxP9qypBCaXaKQ9p0UGvp2EiqWYLVPlo-qzzJUhieKMWG6IrTWZ6AygmBxUy-11w05yXkOJE1_VCtUF3jx1HqWJAVmhaPWiKAoIEO8jn156tofaGp2H89tj9j6aHe1KbtcuLXXYqceBbjpBu53G1B7r0ei7HQsCr6YYDvXrvPEddHvuXfBDGAkWcEIS_HqRjgypsobpLxlVk1L_LGua_zwlQFGx17qhywqbJPDjzDCkFO6SyCMSqTRRgBdve8jhcZB3NUae0_VfTvGx_zK-b0p97lwtPy1003__shgqsO0)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgyMDjkspWJljTJwCzD_qqsGQoSd4KHj6ZSHHTjNRJftX8qDRQPKgHAKadSnRxxWg9Ef6b91jBwpiCvV7FaKA-Knb8N6OjUZFv5Brx4etuLw-klT_C_Pnzddr_VpMxZD_FRMNny7D_Euu_pktXs--xkVmthQAsZiKQ4OQNYWmoKmYj0UfF3GOnLZ4xZbo_Z_z_-BYHPq_ItU2N4YW7AfT1YKInFRa4HINCjv2T3Yczkud-YenXuaPLQuZ_YmyClyBq0JY1-EUD5vedS71uQWISDN571FO6t55ZQBu4avYlVa2U2PZNtPyDiDIoDxj7sECwC4QKbvIlp7vI6DEHaK5nm44kK0c4UzzmSX4LoJGLN9Vy7cvcv9PN74XJ81qXHXQohrAAySVd6nEbpnTo4wT-wDhnus_8uswyyl3IqrMBIGBdsd7QvkxwN3Ld9D0XTHot0gpq1Elw7y0KjD-LkZKu6Z0Qwe3RbLvaJ3bvapru00Ip8qBOAuIX-mAm8YVzjw84AxatCzVunsiOrEa5L6AtfwGZJLPnh0vWnyOWmezYaOY44YuxY578916j8Mrh1ATSWSmbcE5YpNiY-Tbci7ITQPPYhGXfJIQ7mxoedNcGBaE5cgrMr9HOEtoGP2yeBua-AbmFkSWXRQAJK09y1J3CbBPoXK8MkcpPSIrmmZUgsQv9OsaZ1eTqhmP6VROONOA-Ra1tqtXo7xpQlJCgxY_8KdeAbKshlJgRcKWpQlTlaqB1ve9j0ZecKzQ1SDghIF7F3NKPoFvK6N5VZHPz6jo_EnoJRApdYXgewHM-Q68MQvbw5fVxwqeWn_6FJ2kIOV7kUhZkA7m5_gpNrXzPnfXlJoxspv7hOrNNLf-ijPVvahCIcWxbYiBClSzD-d6nwxjnVi01tb_Kn6sZVQc7SxJQmAHYySjZpOi4eGJkzfrnRE-P-fiI7zCLIWyYKA2G1H4GAYFAbiA8byOr8uHrV2iktuHe_TK6POXo4jADThqUKWD-j10772mO8I-3TNO0Gj08EaX9K-TyzL6iiytBIgHmJ9woX_bu954Z0FNx0rWZMWE1xWPb2cATeZTMwCnmQjY2MyZWhcAOv0xIaREjG51eaAaFcbqnvlWkQ_OV86iWtLEZbjDKh5lV4QaIvX2Lzykimepy0BONqYn7DgyCF8hM3BL_dEpMPizsUczCCD4wnnk5S68xmmQP7homMcr1Gr2DTwW3APzWoUahLYLXdK2Qdeo-oYu76SD-YVTjTXdC4NClELLHFBGKQFL9PPZt3kcNW0YcDUOfbYj9cMY1C22XLLiZphOuPwBL8gm1D1jqsp3ik1S8eS6rw0716-Qg5INbUw7f8jnjMpp2sXhhZM1GwfAHy2Sbje-6q9iae1qUabQQGvKARYOiOF5GxfYEEthKyxmrBwSTFAFr-gzq6wDqDsyypbdjebmjzjHdpXY_bXbvOoIZhp_zugMPR1M9e38Hlz1gERIqFGB25XhUJoj9Ws2x78Vurpr9_gQam3dsGSjUU6YCJ10SmkCpeVSNbuAX5A_lJlUmtAXiWWDFobXTP1bmhvxbPdQMWCLb3scNQjIVdMAztBf8vvhlEjCIKXO4qdeUIMEr-Gv-r0ybjFWMjLX9MPWNRUfYdeZ2xOKrVCe6r7PTSqoK5kIqI-7GNi8q-uWm-OLavpurz-c3gglqyO9_bkL1qnr6rdzN4nKQ3QeDbW5GbShr_S1g0TPIeGjqNJNstumnGRh_FDTb2f_7XyN5yS7foSdWGerEVCF49oI3Xp2USDuJ9oSaaFeZHHOGcBcKQcRfmz5v7QE9nJP88JH8Nu6ba7l-xI8taPO1s5Pc7o9RejSkMd4OeyIJFjaddswIBo2mshh8aChk0RpFnH1DZODkhvC8DqQGbDPANaPd5Mv9NhkGqGcUku6M4lFWavn6wsDAqhNlgKru1JukCHVy5003__oP-_zm0)

#### Fields

| Field name | Type | Description |
|----|----|----|
| dependency | sequence of STRING | |
| enum_type | sequence of EnumDescriptorProto | |
| extension | sequence of FieldDescriptorProto | |
| message_type | sequence of DescriptorProto | |
| name | string | file name, relative to root of source tree
|
| options | FileOptions | |
| package | string | e.g. "foo", "foo.bar", etc.
|
| public_dependency | sequence of INT | |
| service | sequence of ServiceDescriptorProto | |
| source_code_info | SourceCodeInfo | This field contains optional information about the original source code.
 You may safely remove this entire field without harming runtime
 functionality of the descriptors -- the information is needed only by
 development tools.
|
| syntax | string | The syntax of the proto file.
 The supported values are "proto2" and "proto3".
|
| weak_dependency | sequence of INT | |

</details>
<a name=google_protobuf.FileDescriptorSet></a><details>
<summary>google_protobuf.FileDescriptorSet</summary>
### google_protobuf.FileDescriptorSet

- The protocol compiler can output a FileDescriptorSet containing the .proto
 files it parses.

![](https://plantuml.com/plantuml/svg/~1UDgCqB5gmp0KXU5TJt7gnQrQG-TYZ4sbbYvMYPKv6Fc621GhaUGfvDr380H25ltpn-LosfZ6a9QzOsLsh2oHrOrsQwr-PIzNdPO2tqf8L1M4GgyqfFZJBtUQVJNxLsRS62EA7-j8K3J17f8F0wK2OyJc4tMDL_7XWzdPwGrF34s34tl7rZh25pWVwBZGR0Zre_qFFlc6StPcBStJTT9B0000__zyEKv4)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgyM5jlspWMVjUlqEQbkyacYEquSHP5qABn3Zfeww99vvMWgMERAKMg99N47Sn_7r2KP96cBXwazPiFp-KxLnxnZT9OwZnbqQl1l-ZLgtZGhsHz-_L-yTlyq_pBs_lvRVnkSJkFJq_ZsqNyQN4Vps_Vt_-hPXsiTJ3MY32iL7oKWb9u3KXlCpYAiOhHUVpwTVpls_yAIJOq-K-y5cBD06LIQB7CLsUte8YacHRoio75DpVndz5933nF2otn_-BZupludWCd4B-UypprH6wEZut0imQkgE2UmFyfiAHR0adCrxuXJmJDA-ulXjbgM1dTW-rnd1eZIalAr-O_A0r9oCcWkE0WLYW1mZpkXJa8YsIQ2guA_eysCmjBAeubA92FaA0IMLEfHNdZyWs9qvUIkGxJNrLjUF6svJ4vh3oyDEognQI1SkqvxN8tVIyQifIf4RgEMe1N1m9q_0_X2rgkozqQ7VKO3NH1PSglCYSSF4zVl002M92XxHN2IVo8MHuI_yFG0nNScPZhmsEqZsjmWiemMjEp0QRBE5S6C6FY2M56iKd5KWWMdSG9P188rf3iQ3cdN8FC99ZXOCrw8VlQPB5sd6WLOIuBQKWbXSBVLauyJvSWmyrMgTgLM3Xye_5GK5uGVrAy772NVTX28wK2-09WwYbfuVI5AdJTxCArmZdJg6gxEec5ZGGSseCI7FdPPdW9zhe9sK4Vp77uRlFAfBYxA4_WELWwXVRcPAelnQ3T-sq6DPi7kWxaa4XP3ufbeopDYHlk8fA7gJJWcXgdNHhTlhWOacolv8WRgl8KlQjZ56gQ1nMM-lsk5cFuntOda67oxMMwxYH-0lojqjGTMiUPPaml3ywIws5JrrMNhXLbrIITzIQ7GMiZPgRVEDbsNBA_OEDjRkT3LiwkNSAus-nOKo5uxR1d-P9HWbgzfrnRE-P2fiI7T6UfGMHAv9808Y81HFbAMD62-4uay9wlXENRSesVcw1CzVL2glFl9lKET5aCrmSLmntegXHCGUtbYtKkFywC69yFiEoF28A0uoK3X2NmvW9225e31qa9AdFGF5GRBBDYlAeC4oUreQ6o5YXG10_u4LiZM0E2xpbc2c6Ue0rMcyP4gjc2M8hZD6UQPWoG2Q9_A78D4XKXyyksE6-3PlyXiW7o3ULwDTlf5Si7OZMYJCAAFlkzaD8VW5P2-Ws15kNXHv7OQPfjibPDvgpTStEQWiO9rZYS2yCHFjXsw9NvSXiAYdgYAnr0-GAhJKUfEX5hJEVnQF3jEUrf3FS3k6kbJ766W6lPkF-goQb0eoSgYwodMEyOk41AOvvWcQ2aRcQ42G6bYWfvkNqr1RqHIHcWSQ_RXhdbOYAC0jUc1m2dbAztC2dFSbrT5BkrhkD2i8QQLuB8TKX9yVabzuss3Bp980S7f9Kca6P2cwcF63oMYwqZZjxlU3uObiAFdr3wtLQR3N3HsG3rcv3bxbiWGqz5GnuE2hc-pxhnT8Zrb_zYAcTR2QBl-osyLLHmR6jv088jrByXbPPwmtOr3F6l-HRs5wiIOz_owwvU5KOc20vWS9dHXvBBmL69blQl3x9Vgwo104wAMrwaAN2jd6_SyYm1ZSa6aYPJswwUORrfNMOppDlEjCIKXO7KdeUIM6wTVRjV8Bdr-zDwBM5jLh2zru14v6OthEWh9h2suv9hkg8WzqK2xuK1s-WJJk4pbgNptDYdZwQkTcyIzYqW4ugs79NxMKLSRZMeNR0CaF8X-Hy4fmPOHOagrFoggkvsd0BAxADWdIrq7X-VdiP7vsTdnqSnElS98vymxYLCVC95JHYTdOtYenXD8pHoARF8r8MZvZn28uzhD8xGQEm2D6mNhQHQyZ90kuhC9v0ZEelGsEEQx9CkzadJo7pK-336dkFZKMHs7PTc34psHISUcp4wtMUxTBCntf5goQl8ZESzoPahUHqXp-HbXBoGZQSHsiTmkKUP-PGtm9CyPT7V0G00___WQoeW)

#### Fields

| Field name | Type | Description |
|----|----|----|
| file | sequence of FileDescriptorProto | |

</details>
<a name=google_protobuf.FileOptions></a><details>
<summary>google_protobuf.FileOptions</summary>
### google_protobuf.FileOptions


![](https://plantuml.com/plantuml/svg/~1UDgCaqrlr30GXk_-5KCl2ragSKIhrQeL2OW3ZGJRysZMdcpSEhRhZq91_7UKJKM2caNnBNeUltbdebp5H27bpeZLuYDMArXqdjNhsttzgRgflbxlgn8-r6K5bvTGrd1Jxw4gF-zV_LKNfoxkAgIX6E7YepPS-wITZHT04V0TRBVmkdphWcorUWCJ0NOx-2NM82MofODXfC2M8cpWu9mPo94j1oqnSdZKagSmjXGyMkeuUf8C6uWfQ7iKQr3i0qjAh4R_wD2JlAVZF-OTFTBm4agC_939H2IhiANOZfT7RRRB2NVP9EqDOwFD2-Xoue2dBVMDNrGuLsruGjcolCUSclTZhZlSoI4HVU16_vXUTZxfJlzaR5o03HJ5PF5OFyClJd5HY3NurfzDwjdvoNlQSI95YUQ_HM_CWwV_v8PyU9fRIlokcpJJCbjj4mSVEB52TnhqDFStViXi9SFsTgeCgzWLXVWjhjYg_j_y4m00__zat1vD)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKL4rF6p4GlU-lcEP2ksaY0fSAeGZKf5KF9LKRpgE9TtPZyDh67ocquhzNpkPJR23rBVFUp3o_FE-L3-H2h5LsSlJ9JaxWgBEYNjzE9r_7D-EVrzFn23vFHcFezM0qWPl95CQZRzDt6-hHKu_McWb5taFdYrGyiK4QxJj07l0KBY_X_UYZSM8kYmzG6LCfHkjCCBDOzdSQO3Y4lraNX43MD5ECv5YJXmkO6QCQf6BDJWhqx1PIy2xev-GiQghPMn8C5-23axhAkb2mTImeSB7bLmOjYNkgzfXtjA1c2GL6VeYaF98kS4v-lctUqbgrBE4wgY2jOYobUW6Q6DZXqhMa-8M4GzAQNoZcBEunXlBJTgwPtObc8bh7fNpSRJOso5h-OIoDWml8yntZSR82lvk2ypphWftRWvCITlZc2QqvK461sl-Bn6W7dbwPw-BigSqK_rkMeKLbr587TjPnu0BDygBBU__YXyXQC5pUxb8QAuPvdZsli_nALFSS0zQnRj8-s0_xCj2RUMsIchQpDnv9YzBrOw6gSbobh2v8nVtGcvWUqRfUAaCXwu8iM0TPIdOlMrPHVCCblA6QVv0BmsLOTDel5unIXyr8gTCkQxmy0As2l2xEdWBxhLT9IEFD-Vzxiz6tDabwvCV0sZSXM4KgxK2RQ1i7dZCyXRpNWywWtnz01t2mgPps-ta7y2p3ixt2UNR5kaZVzdy1003__tpAtwO0)

#### Fields

| Field name | Type | Description |
|----|----|----|
| cc_enable_arenas | bool | Enables the use of arenas for the proto messages in this file. This applies
 only to generated classes for C++.
|
| cc_generic_services | bool | Should generic services be generated in each language?  "Generic" services
 are not specific to any particular RPC system.  They are generated by the
 main code generators in each language (without additional plugins).
 Generic services were the only kind of service generation supported by
 early versions of google.protobuf.
 Generic services are now considered deprecated in favor of using plugins
 that generate code specific to your particular RPC system.  Therefore,
 these default to false.  Old code which depends on generic services should
 explicitly set them to true.
|
| csharp_namespace | string | Namespace for generated classes; defaults to the package.
|
| deprecated | bool | Is this file deprecated?
 Depending on the target platform, this can emit Deprecated annotations
 for everything in the file, or it will be completely ignored; in the very
 least, this is a formalization for deprecating files.
|
| go_package | string | Sets the Go package where structs generated from this .proto will be
 placed. If omitted, the Go package will be derived from the following:
   - The basename of the package import path, if provided.
   - Otherwise, the package statement in the .proto file, if present.
   - Otherwise, the basename of the .proto file, without extension.
|
| java_generate_equals_and_hash | bool | This option does nothing.
|
| java_generic_services | bool | |
| java_multiple_files | bool | If set true, then the Java code generator will generate a separate .java
 file for each top-level message, enum, and service defined in the .proto
 file.  Thus, these types will *not* be nested inside the outer class
 named by java_outer_classname.  However, the outer class will still be
 generated to contain the file's getDescriptor() method as well as any
 top-level extensions defined in the file.
|
| java_outer_classname | string | If set, all the classes from the .proto file are wrapped in a single
 outer class with the given name.  This applies to both Proto1
 (equivalent to the old "--one_java_file" option) and Proto2 (where
 a .proto always translates to a single class, but you may want to
 explicitly choose the class name).
|
| java_package | string | Sets the Java package where classes generated from this .proto will be
 placed.  By default, the proto package is used, but this is often
 inappropriate because proto packages do not normally start with backwards
 domain names.
|
| java_string_check_utf8 | bool | If set true, then the Java2 code generator will generate code that
 throws an exception whenever an attempt is made to assign a non-UTF-8
 byte sequence to a string field.
 Message reflection will do the same.
 However, an extension field still accepts non-UTF-8 byte sequences.
 This option has no effect on when used with the lite runtime.
|
| objc_class_prefix | string | Sets the objective c class prefix which is prepended to all objective c
 generated classes from this .proto. There is no default.
|
| optimize_for | FileOptions_OptimizeMode | |
| php_class_prefix | string | Sets the php class prefix which is prepended to all php generated classes
 from this .proto. Default is empty.
|
| php_generic_services | bool | |
| php_metadata_namespace | string | Use this option to change the namespace of php generated metadata classes.
 Default is empty. When this option is empty, the proto file name will be
 used for determining the namespace.
|
| php_namespace | string | Use this option to change the namespace of php generated classes. Default
 is empty. When this option is empty, the package name will be used for
 determining the namespace.
|
| py_generic_services | bool | |
| ruby_package | string | Use this option to change the package of ruby generated classes. Default
 is empty. When this option is not set, the package name will be used for
 determining the ruby package.
|
| swift_prefix | string | By default Swift generators will take the proto package and CamelCase it
 replacing '.' with underscore and use that to prefix the types/symbols
 defined. When this options is provided, they will use this value instead
 to prefix the types/symbols defined.
|
| uninterpreted_option | sequence of UninterpretedOption | |

</details>
<a name=google_protobuf.FileOptions_OptimizeMode></a><details>
<summary>google_protobuf.FileOptions_OptimizeMode</summary>
### google_protobuf.FileOptions_OptimizeMode


![](https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oiekMNcfFeNb6JcvnN7W-ZSpAfKt_oKL8NKlD9S9ON4OeLu0niR1GqNdVoYv8pC54q5Epk5QgvQBeVKl1HG-002003__xS9FKS0)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCa44BWZ0SnU_x52yl5cJq0KIKjg933cATnNJPOFeNDoz5tps4wBpVvLr-F1ulTxwU_DnR5WV3uXX1_DJYfkH9bE9QAC5na5mWIS0bIgaW-5cj_cfmQ_1MrjZQEKGTKMTrDKxawJu_TaTZjHozeS5LI_RcfI_KQkXXxYFK3jK-JR7cMvgQfsato3AysOVbUcYNlxu1003__mzdGy80)

</details>
<a name=google_protobuf.GeneratedCodeInfo></a><details>
<summary>google_protobuf.GeneratedCodeInfo</summary>
### google_protobuf.GeneratedCodeInfo

- Describes the relationship between generated code and its original source
 file. A GeneratedCodeInfo message is associated with only one generated
 source file, but may contain references to different source .proto files.

![](https://plantuml.com/plantuml/svg/~1UDgCqC5gX30Gnl5xdkAh5zkqGiz5H351l1XeqxC4CyiARiAQU5hstPU5nOkN_C-_6OQfGpHht2uBovDZUOwaNhJvrwgJW_njj1HebP0e2WY5GMb8qUktdIPlJRwLJOi90Lb7ZbOJoRRUKkzEFeC96BzHbdWNNtwTphFzm86Xgd1Zdp3E-MZYx1r-mFaVNJTo4w4yJ8pDJYlEsPtLvEppmuy0003__q5UKz80)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKqZ5lip0O1E3Tl-8-bdmr1P4rGYWee2XBa5ewMmwy44lKJcqpLVdl5Mf3gsQXx-JXxlGCtZelhHzV1xPQV6ormgBxYkOlTRKlZ-LJNfS5TbLH8efGL3XMDShYKF-ReujN5rjPCqZd4En9avMUsfrfwQ0x4q0wY0HfYl_5ex7DMRKFw8tf1n8NQxmvZLryLqEMuPs5a5eRBxqo6Xjm_anl8-c6aDurH3v7CyxPzIRwNlYahFzA-J5yKvseLnD8QSz2a6xdzqNwyo-fqdu2XN1cj0s9JWs43PotIlVioaG27aK8aZZc0SIQRKctqrVv2000__-baPIw)

#### Fields

| Field name | Type | Description |
|----|----|----|
| annotation | sequence of GeneratedCodeInfo_Annotation | |

</details>
<a name=google_protobuf.GeneratedCodeInfo_Annotation></a><details>
<summary>google_protobuf.GeneratedCodeInfo_Annotation</summary>
### google_protobuf.GeneratedCodeInfo_Annotation


![](https://plantuml.com/plantuml/svg/~1UDgCaK5Bmq0GXU_pAvwzH1CBdaC83TsbzDA0ndDOizDs8SxgxkGa_dSHf4V9Tvh3Duy7RvVL9LtUPofMGqM1LVoftUlG7-p9FdU3DTZtncAxXUbnwWTOSnpkRkhgrDLTQPfTpjWSM3WvPR-FdezoZcCd4jLfYBA1onYVq3IuDuynJTVW7_3V1zeMNrJXZIz1K2E8KWKMVxi_d5vHeonV-7DXcHXD46tBaYhakAI9ntEO6JMofY0N-gOTY_zTuYS00F__Vf5VsG00)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCaK5hWq0GHk_xAxxcOgjDwLb48b52BX5QUvQDEve5EvFkZgVI_ruA9SVWEytXyHZuTb5jqELpDibgJ99W5VzgzT6rX-RKl5LTKsFVrWssMzGjJcs7fZvs3pTrTNNrhsQOROpO78WfM2Mt5qT77gMlc4MjUk4DR4J_YgB0O_qiORXuzuH9P9gflmPHEI_Zoxq2oXBV9iEP9i_8uLbD1c9tkwzMByYHfk_qjH0FXCApbcbgCaHPma3zw6T2ZgZ1ysH-p8xO_Itp6m00__zGPMPK)

#### Fields

| Field name | Type | Description |
|----|----|----|
| begin | int | Identifies the starting offset in bytes in the generated code
 that relates to the identified object.
|
| end | int | Identifies the ending offset in bytes in the generated code that
 relates to the identified offset. The end offset should be one past
 the last relevant byte (so the length of the text = end - begin).
|
| path | sequence of INT | |
| source_file | string | Identifies the filesystem path to the original source .proto.
|

</details>
<a name=google_protobuf.MessageOptions></a><details>
<summary>google_protobuf.MessageOptions</summary>
### google_protobuf.MessageOptions


![](https://plantuml.com/plantuml/svg/~1UDgCqK5Bmq0G1U3x_efdBz7KWkSIGei9ui46D3qlw-weWMGtpamG4V-xQCNMMzvn-6PuC1jHnpeDlSbcnsGPPkMNRlTjSrFlwljjMrUuRgeQgnMg1hkcHLtTjcT_TFRLsLsDxvq85dSaufwf6RLBKHPm0dk5ei1vTPdOltJX0lyDoX8VPeb08vDtIW5hFARKcoK6DrgAokydeyEo5LBxrZ7PfyI3qoE8oOgw61m76qWyTwCcjivx4abyX5FieXAFJ4h1ffysM2FF7-XrekW9nVwK7FgMUMu-pOPY-FxcLm000F__JejxLm00)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKay5lqr0Cnk_lhp2z559QjJjMLRM9H8W33OBkRBc96vwKl1TiPp2X_UyeXAQR65fvH-Vpvyy_AzTg9DOrjPjU_Dnq2XUzFzARstt-Fjjbds_sMGhlyZI3-HpI77Rv7hBqm_xLABtOzUAihgX95IOVMPKgpblpCUW4I06NiDd0w_HjbEAhBzz05MDLCxOIBHwwu-9f3sotyDFDeEHMk23Z4jPmYB5sCsYeHGuczuzAGpCg6txtmdYCqf2T1I6Y6eMIfCIIjH3VMXIaec3LA6TX5tmmbbROkCJuEmsi8Kc-yBUEGy6mkNqi6V9kayGzdBP_pc9Wi7g1mJFE9n1KLS8L6UCTrHt36jJ4Xwfd5Bj3VQuVwqZcPk1B3kQFdkNlba0DlxmLxgZXJoJMhpU3qC_tTum-s6ZfGp-hZUh_yMcOEHOFzyPwPjK76TXS_J-RCTy9abVa7yP1XwETRayDOzlBHW8F3fUGpESmMIuMoGHmvN3rf73bhZcK_R_wAm00___xyntY)

#### Fields

| Field name | Type | Description |
|----|----|----|
| deprecated | bool | Is this message deprecated?
 Depending on the target platform, this can emit Deprecated annotations
 for the message, or it will be completely ignored; in the very least,
 this is a formalization for deprecating messages.
|
| map_entry | bool | Whether the message is an automatically generated map entry type for the
 maps field.
 For maps fields:
     map<KeyType, ValueType> map_field = 1;
 The parsed descriptor looks like:
     message MapFieldEntry {
         option map_entry = true;
         optional KeyType key = 1;
         optional ValueType value = 2;
     }
     repeated MapFieldEntry map_field = 1;
 Implementations may choose not to generate the map_entry=true message, but
 use a native map in the target language to hold the keys and values.
 The reflection APIs in such implementations still need to work as
 if the field is a repeated message field.
 NOTE: Do not set the option in .proto files. Always use the maps syntax
 instead. The option should only be implicitly set by the proto compiler
 parser.
|
| message_set_wire_format | bool | Set true to use the old proto1 MessageSet wire format for extensions.
 This is provided for backwards-compatibility with the MessageSet wire
 format.  You should not use this for any other reason:  It's less
 efficient, has fewer features, and is more complicated.
 The message must be defined exactly as follows:
   message Foo {
     option message_set_wire_format = true;
     extensions 4 to max;
   }
 Note that the message cannot have any defined fields; MessageSets only
 have extensions.
 All extensions of your type must be singular messages; e.g. they cannot
 be int32s, enums, or repeated messages.
 Because this is an option, the above two restrictions are not enforced by
 the protocol compiler.
|
| no_standard_descriptor_accessor | bool | Disables the generation of the standard "descriptor()" accessor, which can
 conflict with a field of the same name.  This is meant to make migration
 from proto1 easier; new code should avoid fields named "descriptor".
|
| uninterpreted_option | sequence of UninterpretedOption | |

</details>
<a name=google_protobuf.MethodDescriptorProto></a><details>
<summary>google_protobuf.MethodDescriptorProto</summary>
### google_protobuf.MethodDescriptorProto

- Describes a method of a service.

![](https://plantuml.com/plantuml/svg/~1UDgCaK5Bmq0GXU_xAvwzL1CBdaCfBUuY7koAn7DOawLTI7R2p4GGyRzBgGXY3tctcVbuR-1jHGFhDFHcELjckSGi_Q2xrze_kBrxsTNEujvRXzKArcFlQpZxM5_zehDTP_zgsZw8OF4KzKYTZT9o6fNucKbfWI1exh1UuzhU4hV7rDtW8ehD1f-cHDkdcBKHvHY6b0-ey4RKcn8fZvCs-Z56L13bb0-cH0x3dvb6JPG55OhY7EJFcw8uNIUzP2AHtoF_3_qosvYxKtlV0G00___kfNHT)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKL4zlsZ0Kl_jJl75X2mD1wGaXr6g9faeRgJPwjapoI2qvjcU_eA6fttqA3g4HR4rzu_dtVl-mSkT9EAfAnOQz3niEeTTfeFTFc_Hhiav-t6-I6BwaSGBZCSGfhDCD9F73vaCBxStQsolBbF0U1j-HdaqUey-Sj6JSepDa1Y0yy2aib_0n_cnSzYppJr0OKoZajaPigztawYgiLl27ZI1J4ZLnJmv5ANK12zWQezW8fBOLSJfOX0LuSb8NR0HQb9tVnf8qsiC2eYW8fM4IHVLjHTT8FBezkalHbrFQXZNac_NAryYUSkLe7MQ2C7-LACVI6aAT7RZ2FQfBr_pXZFbMGuunAYqreRCE2NCUp1rtV-Al2dM6i7nw3GbagoWw9_glwGjLG5sL8VrDD_mnNijwpLXOcxzHsXM_f-f4KJWi127V2rLr_hZSL5jrdk-K4HIArIHt4jtbIlDWtkYAhqM9ZyBHwbYuhlNb7hdKr59ANMjPu-K_he9cEzmU2Fsvgzf8wERs_Tsq_aubIS_nDw7suIaqBwpMuBQ6jGsyC3w5Q3o6mMmocS40-8pnMNToqqwcaqaq03vdVDuPtB8xr7dzdViR003__xQrXJe0)

#### Fields

| Field name | Type | Description |
|----|----|----|
| client_streaming | bool | Identifies if client streams multiple client messages
|
| input_type | string | Input and output type names.  These are resolved in the same way as
 FieldDescriptorProto.type_name, but must refer to a message type.
|
| name | string | |
| options | MethodOptions | |
| output_type | string | |
| server_streaming | bool | Identifies if server streams multiple server messages
|

</details>
<a name=google_protobuf.MethodOptions></a><details>
<summary>google_protobuf.MethodOptions</summary>
### google_protobuf.MethodOptions


![](https://plantuml.com/plantuml/svg/~1UDgCqL5Bmp0K1U3t_8hZNggf0vz7AHico40NqEwvrEJ22bbIarj1nFykcwBhMy_pTmuNxZfpbtWyUb7CZYWApCeltUmRyw1t-ddJQ8LxepIMIoY3dMcWrRQv-gEpLsVVAgplSiRYYVWGdHcuZo4lq6MqTwWgNAlRcEoXTpUO4DGrFaK9HqCYsp4vhF0QenSbUaV78J85-z5wUYUF5QISrDljltay4Ib5YJ7qWIaDYPXS6y_qt7sXjv629LJxI_8pLaifliIQWZlzwJi00F__0GDjc000)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKaz5lcp0Gnj_zLznuoUOiA4dVeYXgDT1KQGlJbZvR1YxKah6PVKIhflxlaw4XG-rMwiVZk_k---cuzYGTjRLciycFpMOmwJr9R-uEsUTqdtw_EQG9VCgI51OBI3BOPmT8azl3kq4wUUhahApGqdk8lYBTsp9hI5dZ8v0Un1AsMtYVVBIkk5Vb1wYihJIAnbcoUNkCHosmsy5lDeSI6uU592nX0xcrcir1bLWtbj0K3qBZ2JLiWFDHkxYzQBu42UTi3grHXj0r3WbBOJjfr_i3VxPe2eJjtT-IVjYES_Putkk_eP-v0fgsxhTVZPVlrXkclXIiRrk_0ks5l6TqigeSLf9GdAHk4JRWoIbJ1QgspVMbVjHMKW_Ma3egTCzRZApnTLPYBsly9XtjEk0c-AiJ2cLe6AbCy6giL__ur7iEnVo1q5zOXI0zcwktindodI4fB_0NeV7zAJnTMF0GJP0D11wPM09VB21QnV4A8X2heRACOnw1M3En7XMks3MQClpjVm800F__BcenX000)

#### Fields

| Field name | Type | Description |
|----|----|----|
| deprecated | bool | Is this method deprecated?
 Depending on the target platform, this can emit Deprecated annotations
 for the method, or it will be completely ignored; in the very least,
 this is a formalization for deprecating methods.
|
| idempotency_level | MethodOptions_IdempotencyLevel | |
| uninterpreted_option | sequence of UninterpretedOption | |

</details>
<a name=google_protobuf.MethodOptions_IdempotencyLevel></a><details>
<summary>google_protobuf.MethodOptions_IdempotencyLevel</summary>
### google_protobuf.MethodOptions_IdempotencyLevel


![](https://plantuml.com/plantuml/svg/~1UDfoA2v9B2efpStXKYSQSAchAn05e4eTGqFytLtzN8CSGrnT59pzNLmLT7KLNFmL_Fn355nTF4CKuKg9DfLejt8bvoGM5oie-QQMPEId-1UKPERd5STxfgJc5kINfEObL_gabgNcAAJcbUOgAIGMAyGRsDWeQBZev1SbPsIcQ2hOsIbKSzLoEQJcfO122H000F__JvC_om00)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCaD4AWZ0KXk_t52TlBCZe0KIKDa8e1x6knTn9XRaZRWOHlNi4qVM-wu-VdoztlfdzCXeM1yFY68BugSLLoQEenALGWiD1SW590bn29HK8NghLNmrU3VxAMjCu1r57r1cifvaytPRxxeo-9oqdFv1rTQbndCYZRPydVA01jCiOGUEWtgSfhFcMvhOVz0Qo35xipNAq-blj4m00___En4P6)

</details>
<a name=google_protobuf.OneofDescriptorProto></a><details>
<summary>google_protobuf.OneofDescriptorProto</summary>
### google_protobuf.OneofDescriptorProto

- Describes a oneof.

![](https://plantuml.com/plantuml/svg/~1UDgCa4sBmZ0OXE_v5REzT3VTmfvBAIsR85uQaNYMq4ODj4b9uadyx-87dZpaERuyxp1C6wBoyJnF94-6v3cIUAdTJeeLx_csavpXNp2EiWGJw8K4PslvzLQJKvExac5I8I0JLhi3qs7mPedERxoBBeCAsF-Xhl7DVfqVJcRymISJJOCBAM3Lh54XH6_iaHHmIpJE1bIWzF4ddWTAoPMqsextPMy1003__-QfKD80)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKKq7Fca0KlE-lUELY2uM8temncaAQNiIqUDuiyA2Ru2xTNKoRnl_Uu09gwXVvtd6ODpDlo6wrOSgqfvhC9W-PpM3IzDJTCKs-nllu-owD8_YIH37uFaG9x9CKukXR-c6aJbQTd9NaDTCQd4IWB2FKkUADaUgWf94EC0rq3kirV8m-IvN_vCKdgAIiQgHDnyZQCdYs2PiD_2KU27P2M84sYekAU20RmwNGi0BNlUub5d1TSXcIz1nh7aunxqK6qrPmOL0r2WqMrCfT7N_WhnP5Zh0-tbFi-kO-mpC96sZn8j0JvI4Ngog55JD8pwnk7tefP9lLDxoi9JF40rwWCBpagFvVwQjzSHNTinCUc3BTUHw8pf-VaN9XHaakEgz6Qlx69-ivWjaVW_hMLHV4ThDyVpTZlg4ahYd-DYYq_McPb7L_B6qwsjZ0XT0vkBuFJXW48JX0Gq93Yyo3m7M0BWXTF01BiaLHTA_vNm000F__JZOaeG00)

#### Fields

| Field name | Type | Description |
|----|----|----|
| name | string | |
| options | OneofOptions | |

</details>
<a name=google_protobuf.OneofOptions></a><details>
<summary>google_protobuf.OneofOptions</summary>
### google_protobuf.OneofOptions


![](https://plantuml.com/plantuml/svg/~1UDgCq4-BWp0G1V1xFiLRB-vcLzZp8g9iGkd5G1lF8ZgbWari4a-btxtq3yLZtdL-CmolzA5pOJbDB8qEIrD4vKMhHgkDhEMkqbBWNmc9B8DGg9M655lzyQRHLwD_PVtKUOz46R87DOVH6f-WysX_aUVu53_MzSTn-C9Qe2XmOTzOp6W2kTbHeA6rZo7-mFcUpWkPdf0tQ_9SBpXdLrQI6Ux5tW800F__XNbHX000)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKaq5lka0GnU_xAURFnN-X6FLeZD4KqlGYJOldpI83tMJTfRk3QTFutHkAearjf7kSUVFcDu-mS2GirLl51hqV6moWrpj8b-iqkOzNyTCoZIEuIw8OmX2Y15P92d7qaFxhfBrTUxEoZHBEWPTeD4LIaJJQUI0Sy17CPl0_kZLsyoBp6oYDAHNooXeoMLqCpoTWFeSF5a2jfIQqbKN2d9kl9ap1zv_njKQzGPYjpoNj-DptsVu8SicY1HfV0RhWVEGIPMcn58Hy9rIDC0L7LkgI1P2REbEdUg6C81Q0p56JB2JQdoDQRF7wLNmbjlWeB3Nd1Q2R_NA7N6hgBALkTbN6oLzQxSwkcBqJkbDM3KYRpUJlsNHynv2au_X6g5txqJ9ZrE5ONZMoBe4zuoFmmn2yqN3eUy37Z8-_5IPiWJflVflF0000__-zPFG0)

#### Fields

| Field name | Type | Description |
|----|----|----|
| uninterpreted_option | sequence of UninterpretedOption | |

</details>
<a name=google_protobuf.ServiceDescriptorProto></a><details>
<summary>google_protobuf.ServiceDescriptorProto</summary>
### google_protobuf.ServiceDescriptorProto

- Describes a service.

![](https://plantuml.com/plantuml/svg/~1UDgCaK5B0p4GXU_pAvwzh6OjU2xBqcA2UB0H6yyIieCDT9EQPBs8_rrS5m_Y8U_u-EQRWTdcObEPnXCrrQ6cGLKMTFTiz9tQgwUTKHAtMYgirv0QUssWvBsv-4MhhTMtaZlPdB4wS7htZYLdb_ovnFIOOeahs8oN6tGTBkLrJExeXolypwBlyK4jHYx7E6038GxyDd5mZEvXBlzCz49GYs17nWQv91zUgKKy5nz3NWJp9lrJ2K6VjEKmVF_ZAm00__zGW6E_)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgiLLzlsZ0GV_UdkF7IBGm4fVG18THgGLEb3QgLFbicEL9BYPtP5pGqzRjFmVdJG5OoQNdZVFVxToTnPqaOofAONNN-sDKLTFgArlldpVhhShNySRzP-l1bxIzXC01_3Qlr1fR-m-P3rTePjRDM5iJ2MkWbI2ywx86mm4SmdyD7_xCsmOiCFq6aTHGZJuqclSrsm-_7NXzjO6HAsZpc3x1Om6_MXo2Mg8XRCYWIgIAOmLRhcFL1gZGZJeSKOGQMZ5GHwuCIIUEtJabgPM46dkU8rgxYUVbhHcqW5iqUpJdfQsclG7N-nfty5RIbhn1JWu4W3Dyu2Z59DQ4A3Zp6FSRdglb3tVCjRpdQo9HKX2OrI1Xo9-uu-uG_CrG1mlpvROi3MtXUxUXTqMUiW2fBdFlhflcZlGhr2SrU1dYoMpTuSo6szjaoFtTW9oPRBsbnZEYzkoYOwiDet_Eqc-0EY_uF-sg3S38d5sIs89TQHHGPZ0GXtuiuQ-GLwcmRr_LTh0MvarKaTnBD-KWH-GLNV2KIV1I6YZtb_7AFN2gg8ANAkL9jvL-U76TLt1u8RPrLBiHbS_llsLJwof2avVYBK5ctj6AbEGTFyxOgWLV6H-0D1j0R3uTZw04VCpvkLgwhocWuz7h09unF6eLRncyQXL5LA46cZ4zFGEvGXVdVp9y0003__pcC02O0)

#### Fields

| Field name | Type | Description |
|----|----|----|
| method | sequence of MethodDescriptorProto | |
| name | string | |
| options | ServiceOptions | |

</details>
<a name=google_protobuf.ServiceOptions></a><details>
<summary>google_protobuf.ServiceOptions</summary>
### google_protobuf.ServiceOptions


![](https://plantuml.com/plantuml/svg/~1UDgCq3zBnJ0K1V0zd-BubcgU3vmVfRIO82uDs7GkCRbWe2OrILt4xox-GNJBcN_tS3bzBYQL_NbbJNLOqw0gFtIOjRgJetmOj1IuLKBYT89G69M65FVwufTMjrR_okngSiPXelJgBQcj-1Zo0IPZkK7Rub9SnsIVlBl2VuEkmnixmj6Mo9f23cSynhYo8_RWGw6q9IhablXrW3Cud-Xbfs09xVoNV5TsdBDtrbDmduD_1000__-D25d4)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKKy5kwZ0GlFihzkN2UyaB0eu88L0JLRsGgeIpvIHBQYdOgRr1hIh-lN83eQXKf7jSpyxCpieBIy9GiwlOe7UnmG1wrH6wtAJ9VRoAdvPf7C5T4iKGXX0bi4fIYAE7z4y7xStQsolBAs4jU6iqUvbZKfFKodeWBF0Hp6RmD_glJVuiYtzGQbrMo6kZIMVDTdWv0_CvlBC02gmDveAmW2baMbSiW4P9HMXgWuG5rvy3C0NVN-DBWof7c6s-GbhAkU-pmydWDOhMvlY6pIlC9w-YB0sMWf3lHTKWJC6IaQfqQ-WcgyxzRQK5iG1aWOhaLgBvFgB43czlnLTYXu_2a5il0ENqvHwvLDHHIkMqQctb3q-jPjVCtWZjEIjdfCrcyljiEd-daAJb-4geR7kquqcT1gyTh4lWmFW8_304RpGS-XxmCUFZYyQ4BL0LxZjz1000__z5bVn0)

#### Fields

| Field name | Type | Description |
|----|----|----|
| deprecated | bool | Is this service deprecated?
 Depending on the target platform, this can emit Deprecated annotations
 for the service, or it will be completely ignored; in the very least,
 this is a formalization for deprecating services.
|
| uninterpreted_option | sequence of UninterpretedOption | |

</details>
<a name=google_protobuf.SourceCodeInfo></a><details>
<summary>google_protobuf.SourceCodeInfo</summary>
### google_protobuf.SourceCodeInfo

- Encapsulates information about the original source file from which a
 FileDescriptorProto was generated.

![](https://plantuml.com/plantuml/svg/~1UDgCq44BWZ0Onl7xFiMJ5sibT0uHnOqGma6kiuovIB2Dd9wYxnw11DxsF_zuUNboFwbncfy3YOCZSOoW5bhSf3ZpcbyBoHbAmJYI14oW5XASLNBpfy5NWtybUb3U8shSF6fJkivKzkuYA8_sY3J5bXtSg1zzjyFQ8Clm9diCJgkfTnOdKDgOrsoiDaZNkBqiAgEKV4XkRFSRzHi00F__zXjEj000)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKai5hmZ0Knk_vAxxruXPNqQk8ABOCOLYOtJbaIMm3RT8bwMdulm-fbZeswDxr-ttl_GvlumDteQqhCXazP3B1gBcYs_SyUqaFwTisJnFiiYH572F9SCXofCa-V-ZHqLj7kn9HSUyH7MthXDfPgVRcP2Dm3pR7QeN7vDawKMhvXCBQebAiSJROZ_Oqk-zWlSONcQAoWWTj3PQWzAW-MsM4mkeUPgzNQaqfETyaRjNk_E9Vv_kDlOVYKfk22LlNoWIF9NnmsXI3JAh0HQda41fATuMBunGD3-MFM9lGPRxXvgyiEAwhtqNEXCr1unZHV3QZ4TY2R9IHbtVx3W00__yWNwmg)

#### Fields

| Field name | Type | Description |
|----|----|----|
| location | sequence of SourceCodeInfo_Location | |

</details>
<a name=google_protobuf.SourceCodeInfo_Location></a><details>
<summary>google_protobuf.SourceCodeInfo_Location</summary>
### google_protobuf.SourceCodeInfo_Location


![](https://plantuml.com/plantuml/svg/~1UDgCaK5Bmq0GXU_xAvwzH5CBdYM4bkuY1Md0ndDOTiTc8PcjkvEJ-Dz5AbB4Gjxr-sPuyDPPR99f75GnEweeC2i_wkQrRPxCthniMgEnRRJ1QWNTOD-qC7hNtlogix_ExghSO7F6uX2dv6WRFUtuBNRFqLa9aHUm6Tq3gWgt-ZucrmT_XoiowXeVQec1h0zyx5mSHsB9U4IM5FXumJo9TJtvIwai3_G-4Jj2TJweor8jSRBI_y61vSpooV8r9ic6uVyYdsfDxBzt_Ge00F__hXjxIG00)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCaK5Bmq0GXU_xAvwzH5ChdYM4bYP8GHgmyHpMtMcoaEp4tSb9_EyY5IdIGjxr-zxmODPHT91fw5KoEof9C2k_wkQjhfxBVVcwgSi2sweeiLgXgB2lQfJ5hhxvKsTVdRrLcLx7YCM1fs1eovPs_iZD2nijZlq2Eg9vH9RXjhZdO3fdxz0ojpqrOs3Xz-duSAMCFCUdMg8dRPrl6yF3G5uYdX0bED-UCKkYJKVsN4hJ0trCv0qXEnNoD5LBZ5gwVzXvER4uQd-DIT2klppaIwt9svy_VmS00F__UUw1n000)

#### Fields

| Field name | Type | Description |
|----|----|----|
| leading_comments | string | If this SourceCodeInfo represents a complete declaration, these are any
 comments appearing before and after the declaration which appear to be
 attached to the declaration.
 A series of line comments appearing on consecutive lines, with no other
 tokens appearing on those lines, will be treated as a single comment.
 leading_detached_comments will keep paragraphs of comments that appear
 before (but not connected to) the current element. Each paragraph,
 separated by empty lines, will be one comment element in the repeated
 field.
 Only the comment content is provided; comment markers (e.g. 
) are
 stripped out.  For block comments, leading whitespace and an asterisk
 will be stripped from the beginning of each line other than the first.
 Newlines are included in the output.
 Examples:
   optional int32 foo = 1;  
 Comment attached to foo.


Comment attached to bar.   optional int32 bar = 2;
   optional string baz = 3;


Comment attached to baz.

Another line attached to baz.

Comment attached to qux.



Another line attached to qux.   optional double qux = 4;


Detached comment for corge. This is not leading or trailing comments

to qux or corge because there are blank lines separating it from

both.

Detached comment for corge paragraph 2.   optional string corge = 5;
   /* Block comment attached
    * to corge.  Leading asterisks
    * will be removed. */
   /* Block comment attached to
    * grault. */
   optional int32 grault = 6;


ignored detached comments.|
| leading_detached_comments | sequence of STRING | |
| path | sequence of INT | |
| span | sequence of INT | |
| trailing_comments | string | |

</details>
<a name=google_protobuf.UninterpretedOption></a><details>
<summary>google_protobuf.UninterpretedOption</summary>
### google_protobuf.UninterpretedOption

- A message representing a option the parser does not recognize. This only
 appears in options protos created by the compiler::Parser class.
 DescriptorPool resolves these when building Descriptor objects. Therefore,
 options protos in descriptor objects (e.g. returned by Descriptor::options(),
 or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 in them.

![](https://plantuml.com/plantuml/svg/~1UDgCaK5hkq0KnE_xAUQVY_zg0pqNaOGgfHSjhJdBHb_i0ttQtMUWb7xt8Ytsq1ISsyxEp6zXTrwjqwdlJB1Q9WYmIj_H_Q4ixhCyUzgNMOgx8ismtI8ja1SbilIX_BT4Lw-kVgkfE-izDWTXKNAZ8wMc69K7sS1wL3U8O_nFhmTNlt1pXGj190dUJGJRjevQgrITRJSHRk7LiRGcGZDCn-x7FtM3LHE16nBb4vFxNH7Rp-SmVARNYQGcn1VOLMvxUhHEap2SIpEVprInw3B9ChF6mVCVLr_CnJo-ANdpONOapVprdm400F__tI6AqW00)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgKaa5Fmp0CXU_v5QQNGKUdxJfDqoPQ8IuhWkuSfQjNBAL9ITm9XFRVKRIj71XIyIsEdz_BfwmyAyTTeyLeS8dH20RLUNIzBVB7R9Ezh8iiXOSypI198CrXanUGfK_5JJywUElWh6AdbVSGRGqPHjSwPApobicQ29G7EON50cxJU-jsRrJTGMrjhL6sph8jk_taYX2MI_WIOr1rxR1MZFAWT8Sm1y-EJ2t6KDckr3_zlRQAnHYeGiEq9tI_9KOruHp7h_ZUeTaXBAvuourgy5avNiPn40L_Eg0am_rACi6hjPx-k3fvzitoaz6BumLL279YC_i_cpxV1H9vYH-CnWTmSoYjrUV7oZQCzGIEGauXJXA8ffD9786SYHMQAlpDxm000F__voJ0SG00)

#### Fields

| Field name | Type | Description |
|----|----|----|
| aggregate_value | string | |
| double_value | float | |
| identifier_value | string | The value of the uninterpreted option, in whatever type the tokenizer
 identified it as during parsing. Exactly one of these should be set.
|
| name | sequence of UninterpretedOption_NamePart | |
| negative_int_value | int | |
| positive_int_value | int | |
| string_value | bytes | |

</details>
<a name=google_protobuf.UninterpretedOption_NamePart></a><details>
<summary>google_protobuf.UninterpretedOption_NamePart</summary>
### google_protobuf.UninterpretedOption_NamePart

- The name of the uninterpreted option.  Each string represents a segment in
 a dot-separated name.  is_extension is true iff a segment represents an
 extension (denoted with parentheses in options specs in .proto files).
 E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 "foo.(bar.baz).qux".

![](https://plantuml.com/plantuml/svg/~1UDgCa45Bn30KXE_v5UDUggmBdfUbj9WWNXgHz1nY-z10-rAI9mZYVvU2U5podRyPXkcAX2oVwwAQQbJJe8e_jH-TVJA3UUsTqNYqsk1qWhOOh8FHp-xcNwrkhTwgfYMKWiF8aONobabejfl4n7u8Axs4B0U40l-0omMt-ZxbwIFETxYMGDlYMnqHYwSl8IunCSvuIsbHHt1OoM-xTaQH7FbT_QYEUDv__Wq00F__3fHNSm00)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCaC5A0p4KHVVvYcitezIAwr9AYmdYPY8oNOUqynm3C-yDoIi8uh_BWBYKdFNXSBc7eZ7hTHfDKurf6bJngnvFdNzshNixTixYoLk7pGRMe_KTd7tfRlxKwchrLdCPOobOdJYnKfupAVL-rYGSsZZHQyowGYm8ZzZjS6ll9Ly-Kd-7GMGOASnPLCxNzuV_2jZlyMNMI2NGfnAN98mjpYAZMOFZH65Uj2sAviI3-JO7udxv_IS00F__29DTxW00)

#### Fields

| Field name | Type | Description |
|----|----|----|
| is_extension | bool | |
| name_part | string | |

</details>

<div class="footer">
