const URL = `${process.env.NEXT_PUBLIC_API_URL}/headline/`;

const getDetails = async (name: string): Promise<any> => {
  const params = name?.toLocaleLowerCase();
  const res = await fetch(`${URL + params}`);
  return res.json();
};

export default getDetails;
