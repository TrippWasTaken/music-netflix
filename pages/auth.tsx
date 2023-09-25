import { useCallback, useState } from 'react';
import { Card, Text, Container, Row, Col, Input, Spacer, Button, Link } from '@nextui-org/react';
import { GoogleCircleFilled, GithubFilled } from '@ant-design/icons';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const Auth = () => {
  const router = useRouter();
  const [email, setEmail] = useState<String | null>(null);
  const [username, setUsername] = useState<String | null>(null);
  const [password, setPassword] = useState<String | null>(null);
  const [signup, setSignup] = useState<Boolean>(false);
  const { Body, Header, Footer } = Card;
  const { Password } = Input;

  const toggleSignup = () => {
    setSignup((prev: Boolean) => !prev);
  };
  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        username,
        password
      });
    } catch (err) {
      console.log(err);
    }
  }, [email, username, password]);

  const login = useCallback(async () => {
    try {
      await signIn('credenitals', {
        email,
        password,
        callbackUrl: '/'
      });
    } catch (err) {
      console.log(err);
    }
  }, [email, password]);

  const confirmAction = () => {
    signup ? register() : login();
  };

  return (
    <Container fluid css={{ padding: '$2xl $xl ' }}>
      <Row justify="center">
        <Card
          css={{
            width: '100%',
            '@sm': {
              width: '$8xl'
            }
          }}
        >
          <Header>
            <Row justify="center">
              <Text h1 size={30}>
                {signup ? 'Sign In' : 'Sign Up'}
              </Text>
            </Row>
          </Header>
          <Body>
            <form>
              {signup && (
                <>
                  <Input bordered fullWidth labelPlaceholder="Username" onBlur={e => setUsername(e.target.value)} />
                  <Spacer y={2} />
                </>
              )}
              <Input bordered fullWidth labelPlaceholder="Email" onBlur={e => setEmail(e.target.value)} />
              <Spacer y={2} />
              <Password bordered fullWidth labelPlaceholder="Password" onBlur={e => setPassword(e.target.value)} />
              <Spacer y={1} />
              {signup ? (
                <Text>
                  Already registered?{' '}
                  <Text
                    b
                    color="secondary"
                    css={{
                      textDecoration: 'underline',
                      '@hover': {
                        cursor: 'pointer'
                      }
                    }}
                    onClick={() => toggleSignup()}
                  >
                    sign in!
                  </Text>
                </Text>
              ) : (
                <Text>
                  Need to{' '}
                  <Text
                    b
                    color="secondary"
                    css={{
                      textDecoration: 'underline',
                      '@hover': {
                        cursor: 'pointer'
                      }
                    }}
                    onClick={() => toggleSignup()}
                  >
                    sign up
                  </Text>{' '}
                  first?
                </Text>
              )}
            </form>
          </Body>
          <Footer css={{ display: 'flex', flexDirection: 'column' }}>
            <Row>
              <Col>
                <Button onPress={() => confirmAction()} css={{ width: '100%' }}>
                  {signup ? 'Sign up' : 'Login'}
                </Button>
              </Col>
            </Row>
            <Spacer y={1} />
            <Text size={'$sm'} css={{ opacity: '50%' }}>
              Wanna use something else?
            </Text>
            <Row css={{ paddingTop: '$md', borderTop: '1px solid $accents1' }}>
              <Col>
                <Button
                  onPress={() => signIn('google', { callbackUrl: '/' })}
                  css={{ width: '100%' }}
                  icon={<GoogleCircleFilled />}
                  bordered
                  color="secondary"
                  iconRight
                >
                  Use google
                </Button>
              </Col>
            </Row>
            <Row css={{ paddingTop: '$md', borderTop: '1px solid $accents1' }}>
              <Col>
                <Button
                  onPress={() => signIn('github', { callbackUrl: '/' })}
                  css={{ width: '100%' }}
                  icon={<GithubFilled />}
                  bordered
                  color="secondary"
                  iconRight
                >
                  Use Github
                </Button>
              </Col>
            </Row>
          </Footer>
        </Card>
      </Row>
    </Container>
  );
};

export default Auth;
