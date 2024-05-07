import React from 'react'
import { ReactComponent as Logo } from '../assets/singleLogo.svg'
import Countdown from 'react-countdown'
import { BxlLinkedin, IcBaselineTelegram, MdiYoutube, MingcuteSocialXLine, RiInstagramFill } from '../assets/svg'

function Token() {
    const amountReceived = 46000.0
    const amountTotal = 460000.0
    const tokenAmount = 0.23

    const currentTimeStamp = Date.now();

    const endTimeStamp = currentTimeStamp + (3 * 24 * 60 * 60 * 1000);

    const Completionist = () => <span>Countdown finished!</span>;

    const renderer = ({days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Completionist />;
        } else {
          return (<>
            <div className='countdown'>
                <div className='timeStamp'>
                    {days}:
                    <span>Days</span>
                </div>
                <div className='timeStamp'>
                    {hours}:
                    <span>Hours</span>
                </div>
                <div className='timeStamp'>
                    {minutes}:
                    <span>Minutes</span>
                </div>
                <div className='timeStamp'>
                    {seconds}
                    <span>Seconds</span>
                </div>
            </div>
          </>);
        }
      };

  return (
    <div className='customContainer tokenContainer'>
        <div className='tokenBox' style={{margin:'30px auto'}}>
            <div className='tokenLogo'>
                <Logo />
            </div>
            <div className='tokenHeading'>
                <div className='tokenName'>
                    CXC
                </div>
                <div className='tokenMain'>
                    Token Presale
                </div>
                <span>Buy in before Token Price increases</span>
            </div>
            <div className='tokenStage'>
                <div className='tokenStageName'>
                    Stage 3
                </div>
                <div className='tokenBoxBg' style={{padding:'0 10px 10px 10px',marginTop:'12px'}}>
                    <div className='barBox'>
                        <div className='text-start'>
                            <h3 className='heading'>Token Price</h3>
                            <div className='amount'>${tokenAmount}</div>
                        </div>
                        <div className='text-start'>
                            <h3 className='heading'>Amount Received</h3>
                            <div className='amount'>${amountReceived}/${amountTotal}</div>
                        </div>
                    </div>
                    <div className='progressBar'>
                        <div className='progressAmount' style={{width:`${(amountReceived / amountTotal) * 100}%`}}>
                            <div className='percentage'>{(amountReceived / amountTotal) * 100}%</div>
                        </div>
                    </div>
                </div>
                <div className='tokenBoxBg' style={{padding:'22px 10px',marginTop:'20px'}}>
                    <div className='countDownDiv'>
                        <h3 className='heading'>Stage 3 end in</h3>
                        <Countdown date={endTimeStamp}  renderer={renderer} />
                    </div>
                </div>
            </div>
            <div className='tokenHeading d-grid' style={{marginTop:'-10px'}}>
                <span>Amount accumulated at each stage.</span>
                <span>Stage 4 prices will increase to $0.0004</span>
            </div>
            <div className='tokenHeading d-flex flex-column align-items-center' style={{gap:'16px'}}>
                <button className='colorBtn w-100'>Buy Token</button>
                <a className='linkClass' href='/#'>Add Funds</a>
            </div>

            <div className='tokenHeading d-flex flex-wrap justify-content-center align-items-center' style={{gap:'48px'}}>
                <a className='socialLinks' href='/#'><IcBaselineTelegram /></a>
                <a className='socialLinks' href='/#'><RiInstagramFill /></a>
                <a className='socialLinks whiteBg' style={{width:'42px',height:'42px'}} href='/#'><MdiYoutube /></a>
                <a className='socialLinks whiteBg' style={{width:'42px',height:'42px'}} href='/#'><MingcuteSocialXLine /></a>
                <a className='socialLinks whiteBg' style={{width:'42px',height:'42px'}} href='/#'><BxlLinkedin /></a>
            </div>
        </div>
    </div>
  )
}

export default Token