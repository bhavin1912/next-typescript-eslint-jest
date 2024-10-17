import styled from '@/types/styled'


const toolTipBg =  `rgba(0,0,0,.7)`;
const toolTipColor =  `#fff`;

export const ToolTipStyled = styled.span(`
	position: relative;
	
	.tooltip-trigger {
		display: inline-block;
	}
	
	.tooltip-bubble {
		min-width: 120px;
		max-width: 210px;
		position: absolute;
		z-index: 10;
		&::after {
			content: '';
			position: absolute;
		}
	}

	.tooltip-top {
		bottom: 100%;
		left: 50%;
		padding-bottom: 9px;
		transform: translateX(-50%);

		&::after {
			border-left: 9px solid transparent;
			border-right: 9px solid transparent;
			border-top: 9px solid ${toolTipBg};
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.tooltip-bottom {
		top: 100%;
		left: 50%;
		padding-top: 9px;
		transform: translateX(-50%);

	&::after {
			border-left: 9px solid transparent;
			border-right: 9px solid transparent;
			border-bottom: 9px solid ${toolTipBg};
			top: 0;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.tooltip-left {
		top: 50%;
		right: 100%;
		padding-right: 9px;
		transform: translateY(-50%);

	&::after {
			border-left: 9px solid ${toolTipBg};
			border-top: 9px solid transparent;
			border-bottom: 9px solid transparent;
			top: 50%;
			right: 0;
			transform: translateY(-50%);
		}
	}

	.tooltip-right {
		top: 50%;
		left: 100%;
		padding-left: 9px;
		transform: translateY(-50%);

		&::after {
			border-right: 9px solid ${toolTipBg};
			border-top: 9px solid transparent;
			border-bottom: 9px solid transparent;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
		}
	}

	.tooltip-message {
		background: ${toolTipBg};
		border-radius: 3px;
		color: ${toolTipColor};
		font-size: .75rem;
		line-height: 1.4;
		padding: .75em;
		text-align: center;
	}
`
)
