import { CardHeader } from './components/card.header';
import { Card } from './card';
import image from '../../examples/images/image.jpeg'
import { CardActions, CardBody, CardBodyTitle, CardTitle } from './components';
import { Button } from '../button';
import { Divider } from '../layout';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Badge } from '../badge';

export const PreviewCard = () => {
  return (
    <div className="flex flex-col p-3 space-y-4">
        <h1 className="text-3xl">Card</h1>
        <div className="flex flex-row space-x-3">
            <div className="flex flex-col space-y-3 border-[1px] border-customGray-400/30 rounded-lg p-3">
                <h1 className="text-xl">Overlay</h1>
                <div className="flex flex-col space-y-4">
                    <div className='flex flex-row space-x-4'>
                        <Card shadow='lg'>
                            <CardHeader imageUrl={image}/>
                            <CardBody>
                                <CardBodyTitle>
                                    Title
                                </CardBodyTitle>
                                <p className='text-customGray-400/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias tempore fuga aspernatur animi, eos cupiditate perspiciatis minima obcaecati debitis?</p>
                                <CardActions>
                                    <Button label='View' onClick={()=>console.log("")} type='button' variant='primary'/>
                                </CardActions>
                            </CardBody>
                        </Card>
                        <Card shadow='lg'>
                            <CardHeader imageUrl={image}/>
                            <CardBody>
                                <CardBodyTitle>
                                    Title
                                </CardBodyTitle>
                                <p className='text-customGray-400/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias tempore fuga aspernatur animi, eos cupiditate perspiciatis minima obcaecati debitis?</p>
                                <CardActions>
                                    <Button label='Remove' onClick={()=>console.log("")} type='button' variant='secondary'/>
                                    <Button label='View' onClick={()=>console.log("")} type='button' variant='primary'/>
                                </CardActions>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <Card shadow='lg' overlay>
                            <CardHeader imageUrl={image}/>
                            <CardBody>
                                <CardBodyTitle style='text-[#f7f8f4]'>
                                    Title
                                </CardBodyTitle>
                                <p className='text-[#f7f8f4]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias tempore fuga aspernatur animi, eos cupiditate perspiciatis minima obcaecati debitis?</p>
                                <CardActions>
                                    <Button label='View' onClick={()=>console.log("")} type='button' variant='primary'/>
                                </CardActions>
                            </CardBody>
                        </Card>
                        <Card shadow='lg' overlay>
                            <CardHeader imageUrl={image}/>
                            <CardBody>
                                <CardBodyTitle style='text-[#f7f8f4]'>
                                    Title
                                </CardBodyTitle>
                                <p className='text-[#f7f8f4]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias tempore fuga aspernatur animi, eos cupiditate perspiciatis minima obcaecati debitis?</p>
                                <CardActions>
                                    <Button label='Remove' onClick={()=>console.log("")} type='button' variant='secondary'/>
                                    <Button label='View' onClick={()=>console.log("")} type='button' variant='primary'/>
                                </CardActions>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <Card shadow='lg' style='border-[1px] border-customGray-300/20'>
                            <CardTitle title='Card title'/>
                            <CardBody>
                                <p className='text-customGray-400/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias tempore fuga aspernatur animi, eos cupiditate perspiciatis minima obcaecati debitis?</p>
                                <Divider/>
                                <CardActions>
                                    <Button label='View' onClick={()=>console.log("")} type='button' variant='primary'/>
                                </CardActions>
                            </CardBody>
                        </Card>
                        <Card shadow='lg' style='border-[1px] border-customGray-300/20'>
                            <CardTitle title='Card title' rightIcon={<BiDotsHorizontalRounded size={28}/>} badge={<Badge variant='info'>new</Badge>}/>
                            <CardBody>
                                <p className='text-customGray-400/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias tempore fuga aspernatur animi, eos cupiditate perspiciatis minima obcaecati debitis?</p>
                                <CardActions>
                                    <Button label='Remove' onClick={()=>console.log("")} type='button' variant='secondary'/>
                                    <Button label='View' onClick={()=>console.log("")} type='button' variant='primary'/>
                                </CardActions>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <Card shadow='lg' style='border-[1px] border-customGray-300/20'>
                            <CardBody>
                                <CardBodyTitle >
                                    Title
                                </CardBodyTitle>
                                <p className='text-customGray-400/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias tempore fuga aspernatur animi, eos cupiditate perspiciatis minima obcaecati debitis?</p>
                                <CardActions>
                                    <Button label='View' onClick={()=>console.log("")} type='button' variant='primary'/>
                                </CardActions>
                            </CardBody>
                        </Card>
                        <Card shadow='lg' style='border-[1px] border-customGray-300/20'>
                            <CardBody>
                                <CardBodyTitle>
                                    Title
                                </CardBodyTitle>
                                <p className='text-customGray-400/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias tempore fuga aspernatur animi, eos cupiditate perspiciatis minima obcaecati debitis?</p>
                                <CardActions>
                                    <Button label='Remove' onClick={()=>console.log("")} type='button' variant='secondary'/>
                                    <Button label='View' onClick={()=>console.log("")} type='button' variant='primary'/>
                                </CardActions>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
