import './App.css'
import { Button, Form, InputNumber, Layout } from 'antd'
import logo from './assets/text.svg'
import { useState } from 'react'

function App() {

  const [results, setResults] = useState<string[]>([])
  const [isError, setIsError] = useState(false)

  const onFinish = (values: any) => {
    console.log(values)
    const {first, second, need} = values;
    setIsError(false)
    const arr: string[] = []

    for (let i = first; i <= second; i++) {
      if((need/i).toString().length <= 5) {
        arr.push(`НАЙДЕН ОТВЕТ - ${i} * ${need/i} = ${need}`)
      }
    }
    if(!arr.length) {
      setIsError(true)
    }
    setResults(arr)
  }

  return (
      <Layout style={{height: '100vh'}}>
          <img src={logo} style={{height: 200}}/>
          <div style={{justifyContent:'center', display:'flex', flexDirection:'column',alignItems:'center'}}>
            <Form
              onFinish={onFinish}
              style={{padding: 32, borderRadius: 32, borderWidth: 1, borderStyle: 'solid',  width: 300 }}
              labelCol={{ span: 16 }}
              wrapperCol={{ span: 16 }}
              initialValues={{
                'first': 5500,
                'second': 6500,
                'need': 4000
              }}
              >
              <Form.Item
                label="Первое число"
                name="first"
              >
                <InputNumber min={0}/>
              </Form.Item>
              <Form.Item
                label="Второе число"
                name="second"
              >
                <InputNumber min={0}/>
              </Form.Item>
              
              <Form.Item
                label="Необходимое число"
                name="need"
              >
                <InputNumber min={0}/>
              </Form.Item> 
              <Button type="primary" htmlType="submit">Посчитать</Button>
            </Form>
            <div>
              {isError && <p>{'Ничего не нашлось :('}</p>}
              {results.map((el) => <p>{el}</p>)}
            </div>
          </div>
      </Layout>
  )
}

export default App
