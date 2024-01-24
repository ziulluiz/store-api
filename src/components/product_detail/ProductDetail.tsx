import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import audifonos from '../../assets/audifonos.jpg';
import bocina from '../../assets/bocina.jpg';
import iphone from '../../assets/iphone.jpg';
import S23 from '../../assets/S23.jpg';

import * as CryptoJS from 'crypto-js';


const data = [
    {
        id: 1,
        image: audifonos,
        title: 'WH-1000XM5',
        add_to_car: '#',
        buy: '#',
        price: '1000'
    },
    {
        id: 2,
        image: bocina,
        title: 'Bocina JBL',
        add_to_car: '#',
        buy: '#',
        price: '500'
    },
    {
        id: 3,
        image: iphone,
        title: 'Iphone',
        add_to_car: '#',
        but: '#',
        price: '9000'
    },
    {
        id:4,
        image: S23,
        title: 'S23',
        add_to_car: '#',
        buy: '#',
        price: '5000'
    }
]

export const ProductDetail = () => {
    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();
    const productId = id ? parseInt(id, 10) : undefined;
    const product = productId ? data.find((product) => product.id === productId) : undefined;
    if (!product) {
      // Si no se encuentra el producto, puedes redirigir a una página de error o manejarlo de otra manera
      navigate('/error');
      return null;
    }
    
  const handleBuyNowClick = async () => {
    try {
      const apiKey = 'tOqWgOZAFq6aAYpqyQtAGVkjfo2Qp3lUxd';
      const apiSecret = 'tu_api_secret'; // Reemplaza con tu API Secret real

      // Genera un UUIDv4 para CLIENT_REQUEST_ID
      const clientRequestId = uuidv4();

      // Obtiene el Timestamp actual
      const timestamp = Date.now().toString();

      // Cuerpo/Body de la solicitud
      const payload = {
        transactionAmount: {
          total: product?.price,
          currency: 'MXN'
        },
        requestType: 'PaymentCardSaleTransaction',
        paymentMethod: {
          paymentCard: {
            number: '{{test_card}}',
            securityCode: '123',
            expiryDate: {
              month: '12',
              year: '25'
            }
          }
        }
      };

      //Construir la cadena de texto
      const msgSignatureString = apiKey + clientRequestId + timestamp + JSON.stringify(payload);

      //Genera el hash usando HMAC SHA256
      const hash = CryptoJS.HmacSHA256(msgSignatureString, apiSecret);
      const messageSignature = CryptoJS.enc.Base64.stringify(hash);

      // Puedes utilizar messageSignature en tu solicitud POST
      console.log('Message-Signature:', messageSignature);

       // Configurar los headers para la solicitud POST
       const headers = {
        'Content-Type': 'application/json',
        'Request-Id': clientRequestId,
        'Api-Key': apiKey,
        'Timestamp': timestamp,
        'MessageSignature': messageSignature
      };

      // Realizar la solicitud POST con axios
      const response = await axios.post('https://tu-api.com/tu-endpoint', payload, { headers });

      // Manejar la respuesta según sea necesario
      console.log('Respuesta del servidor:', response.data);
      
    } catch (error) {
      console.error('Error al generar el Message-Signature:', error);
      // Maneja el error según tus necesidades
    }
  };

}
