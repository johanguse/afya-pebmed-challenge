import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SelectField } from '@/components/ui/select'

export async function FormCheckout() {
  return (
    <form method="POST">
      <fieldset className="mb-2">
        <div className="mb-4">
          <Input
            label="Número do cartão"
            name="cc-number"
            id="cc-number"
            placeholder="0000 0000 0000 0000"
            type="text"
            required
            maxLength={16}
          />
        </div>

        <div className="mb-4 flex space-x-14">
          <div className="w-1/2">
            <Input
              label="Validade"
              name="cc-expiry"
              id="cc-expiry"
              placeholder="MM/AA"
              required
              maxLength={5}
            />
          </div>
          <div className="w-1/2">
            <Input
              label="CVV"
              name="cc-cvc"
              id="cc-cvc"
              placeholder="000"
              required
              maxLength={3}
            />
          </div>
        </div>

        <div className="mb-4">
          <Input
            label="Nome impresso no cartão"
            name="name"
            id="name"
            placeholder="Seu nome"
            required
          />
        </div>

        <div className="mb-4">
          <Input
            label="CPF"
            name="cpf"
            id="cpf"
            placeholder="000.000.000-00"
            required
          />
        </div>

        <div className="mb-4">
          <Input
            label="Cupom"
            name="coupon"
            id="coupon"
            placeholder="Insira aqui"
          />
        </div>

        <div className="mb-4">
          <SelectField
            label="Número de parcelas"
            id="installments"
            placeholder="Selecionar"
            options={[
              { label: '1x de R$ 580,00/mês', value: '1' },
              { label: '2x de R$ 270,00/mês', value: '2' },
              { label: '3x de R$ 180,00/mês', value: '3' },
              { label: '4x de R$ 144,00/mês', value: '4' },
              { label: '5x de R$ 120,00/mês', value: '5' },
              { label: '6x de R$ 96,00/mês', value: '6' },
              { label: '7x de R$ 80,00/mês', value: '7' },
              { label: '8x de R$ 72,00/mês', value: '8' },
              { label: '9x de R$ 64,00/mês', value: '9' },
              { label: '10x de R$ 60,00/mês', value: '10' },
            ]}
          />
        </div>
      </fieldset>

      <Button type="submit" className="w-full">
        Finalizar pagamento
      </Button>
    </form>
  )
}
