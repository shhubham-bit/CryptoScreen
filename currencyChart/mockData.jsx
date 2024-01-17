

export default function getMockCurrencyData(){


    const currencies = []

    for(let i = 1; i< 100; i++){
        if(i%7 == 0){
            currencies.push({
                id: i,
                currency: `BTC ${i}`,
                icon : 'data:image/png;base64,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',
                change: '-8%',
                marketCap: getTimeStamp(),
                price: 55.89*i
            })
        }
        else if(i%5){
            currencies.push({
                id: i,
                currency: `LTC ${i}`,
                icon : 'https://w7.pngwing.com/pngs/777/875/png-transparent-bitcoin-computer-icons-cryptocurrency-litecoin-bitcoin-text-trademark-logo-thumbnail.png',
                change: '+8%',
                marketCap: getTimeStamp(),
                price: 22.09*i
            })
        }
        else if(i%3){
            currencies.push({
                id: i,
                currency: `ETH ${i}`,
                icon : 'https://w7.pngwing.com/pngs/662/818/png-transparent-litecoin-cryptocurrency-bitcoin-logo-bitcoin-logo-payment-bitcoin-thumbnail.png',
                change: '+1.8%',
                marketCap: getTimeStamp(),
                price: 56.98*i
            })
        }
        else if(i%2) {
            currencies.push({
                id: i,
                currency: `USDC ${i}`,
                icon : 'https://w7.pngwing.com/pngs/286/459/png-transparent-binance-cryptocurrency-exchange-coin-trade-coin-thumbnail.png',
                change: '+8%',
                marketCap: getTimeStamp(),
                price: 23.78*i
            })
        }
        else{

        }
    }
    return currencies
}


function getTimeStamp(){
    return new Date().getTime(); 
}

const getBarData = () => {
    const bars = [{
        id: 1,
        value: 7, 
        currnecy: 'BTC',
        color: 'green'
    },
    {
        id: 2,
        value: 6, 
        currnecy: 'BTC',
        color: 'orange'
    },
    {
        id: 3,
        value: 4, 
        currnecy: 'BTC',
        color: 'blue'
    },
    {
        id: 4,
        value: 2, 
        currnecy: 'BTC',
        color: 'green'
    },
    {
        id: 5,
        value: 4, 
        currnecy: 'BTC',
        color: 'blue'
    },
    {
        id: 6,
        value: 8, 
        currnecy: 'BTC',
        color: 'orange'
    },
    {
        id: 7,
        value: 6, 
        currnecy: 'BTC',
        color: 'green'
    },
    {
        id: 8,
        value: 4, 
        currnecy: 'BTC',
        color: 'orange'
    },
    {
        id: 9,
        value: 7, 
        currnecy: 'BTC',
        color: 'blue'
    },
    {
        id: 10,
        value: 5, 
        currnecy: 'BTC',
        color: 'green'
    }
]
return bars

}

export {getBarData}