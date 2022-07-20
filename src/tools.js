const initData = async (slug) => {
    const response = await fetch(`https://travel-dummy-api.netlify.app/${slug}.json`);
    return await response.json();
}

export default initData;
