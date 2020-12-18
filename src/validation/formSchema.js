import * as yup from 'yup';

export default yup.object().shape({
    name: yup
     .string()
     .min(2, 'Name must be at least 2 characters long.')
     .required('Name is required.'),
    email: yup
     .string()
     .email('Must be a valid email.')
     .required('Email is required'),
    size: yup
     .string()
     .oneOf(['small', 'medium', 'large', 'xlarge'], 'Size is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onion: yup.boolean(),
    mushroom: yup.boolean(),
    specInstruc: yup.string(),
})