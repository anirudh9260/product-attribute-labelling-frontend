import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isFamilyLoading: false,
    isBrandLoading: false,
    isConfigLoading : false, 
    isCategoryLoading: false,
    family: [],
    products: [],
    brand: [],
    category: [],
    config: {},
    distinctFamilyAttributes : {}
}

export const productReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProduct(state, action) {
            return {
                ...state,
                isError: false,
                isProductLoading: true,
            }
        },
        fetchProductSuccess(state, action) {
            // console.log('Products:', action.payload)
            return {
                ...state,
                isProductLoading: false,
                products: action?.payload,
                isError: false,
            }
        },
        fetchProductFailed(state, action) {
            return {
                ...state,
                message: 'Fetch Products Failed',
                isError: true,
                isProductLoading: false,
            }
        },

        fetchFamily(state, action) {
            return {
                ...state,
                isFamilyLoading: true,
                isError: false,
            }
        },
        fetchFamilySuccess(state, action) {
            // console.log('Family:', action.payload)
            return {
                ...state,
                isFamilyLoading: false,
                family: action?.payload,
                isError: false,
            }
        },
        fetchFamilyFailed(state, action) {
            return {
                ...state,
                message: 'Fetch Family Failed',
                isError: true,
                isFamilyLoading: false,
            }
        },

        fetchBrand(state, action) {
            return {
                ...state,
                isBrandLoading: true,
                isError: false,
            }
        },
        fetchBrandSuccess(state, action) {
            // console.log('Brand:', action.payload)
            return {
                ...state,
                isBrandLoading: false,
                brand: action?.payload,
                isError: false,
            }
        },
        fetchBrandFailed(state, action) {
            return {
                ...state,
                message: 'Fetch Brand Failed',
                isError: true,
                isBrandLoading: false,
            }
        },


        fetchCategory(state, action) {
            return {
                ...state,
                isCategoryLoading: true,
                isError: false,
            }
        },
        fetchCategorySuccess(state, action) {
            // console.log('Category:', action.payload)
            return {
                ...state,
                isCategoryLoading: false,
                category: action?.payload,
                isError: false,
            }
        },
        fetchCategoryFailed(state, action) {
            return {
                ...state,
                message: 'Fetch Category Failed',
                isError: true,
                isCategoryLoading: false,
            }
        },




        fetchConfig(state, action) {
            return {
                ...state,
                isConfigLoading: true,
                isError: false,
            }
        },
        fetchConfigSuccess(state, action) {
            // console.log('Config:', action.payload)
            
            let family_config = {}
            for (var i = 0, l = action.payload.length; i < l; i++) {
                var obj = action.payload[i];
                family_config[obj.family] = {}
                for (var key in obj) {
                    if (key.includes("attribute")){
                        family_config[obj.family][key] = obj[key]
                    }
                    }}
                    
            // console.log("family_config", family_config)
            return {
                ...state,
                isConfigLoading: false,
                config: family_config,
                isError: false,
            }
        },
        fetchConfigFailed(state, action) {
            return {
                ...state,
                message: 'Fetch Config Failed',
                isError: true,
                isConfigLoading: false,
            }
        },



        fetchDistinctFamilyAttributes(state, action) {
            return {
                ...state,
                isDistinctFamilyAttributesLoading: true,
                isError: false,
            }
        },
        fetchDistinctFamilyAttributesSuccess(state, action) {
            // console.log('DistinctFamilyAttributes Attribute:', action.payload.attribute)
            // console.log('DistinctFamilyAttributes Response:', action.payload.response)
            const distinctFamilyAttributesforSingleField = { }
            distinctFamilyAttributesforSingleField[action.payload.attribute] = action.payload.response 

            // console.log("distinctFamilyAttributesforSingleField", distinctFamilyAttributesforSingleField)


            console.log("state.distinctFamilyAttributes", state.distinctFamilyAttributes)
            // const existingUsers = JSON.parse(JSON.stringify(state.distinctFamilyAttributes));
            // const newUsers = [...existingUsers, distinctFamilyAttributesforSingleField];
            // state.users= newUsers;
            // console.log("newUsers", newUsers)
            
            // console.log("...state", ...state.distinctFamilyAttributes)

            return {
                ...state,
                isDistinctFamilyAttributesLoading: false,
                distinctFamilyAttributes: {...state.distinctFamilyAttributes, ...{distinctFamilyAttributesforSingleField}},
                isError: false,
            }
        },
        fetchDistinctFamilyAttributesFailed(state, action) {
            return {
                ...state,
                message: 'Fetch Distinct Family Attributes Failed',
                isError: true,
                isDistinctFamilyAttributesLoading: false,
            }
        },


    },
})


export const {
    fetchProduct,
    fetchProductSuccess,
    fetchProductFailed,
    fetchFamily,
    fetchFamilySuccess,
    fetchFamilyFailed,
    fetchBrand,
    fetchBrandSuccess,
    fetchBrandFailed,
    fetchCategory,
    fetchCategorySuccess,
    fetchCategoryFailed,
    fetchConfig, 
    fetchConfigSuccess, 
    fetchConfigFailed, 
    fetchDistinctFamilyAttributes, 
    fetchDistinctFamilyAttributesSuccess, 
    fetchDistinctFamilyAttributesFailed
} = productReducer.actions

export default productReducer.reducer